const { app } = require('@azure/functions')
const nodemailer = require('nodemailer')

const services = new Set([
  'Transport & Car Hire',
  'Travel Agency',
  'Smart Tracking',
  'Light Cargo & Logistics',
  'General enquiry',
])

const requests = new Map()
const WINDOW_MS = 15 * 60 * 1000
const MAX_REQUESTS = 6

function isRateLimited(ip) {
  const now = Date.now()
  const recent = (requests.get(ip) || []).filter((time) => now - time < WINDOW_MS)
  recent.push(now)
  requests.set(ip, recent)
  return recent.length > MAX_REQUESTS
}

function clean(value, max = 500) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}

function mailer() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
}

// Functions has no durable local filesystem, so email delivery is the record
// of an enquiry. Configure SMTP_HOST/PORT/USER/PASS, SMTP_FROM and ENQUIRY_TO
// in the Static Web App environment variables.
app.http('enquiry', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'enquiry',
  handler: async (request, context) => {
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'
    if (isRateLimited(ip)) {
      return {
        status: 429,
        jsonBody: {
          ok: false,
          message: 'Too many submissions. Please try again shortly or call our office.',
        },
      }
    }

    let body
    try {
      body = await request.json()
    } catch {
      return { status: 400, jsonBody: { ok: false, message: 'Invalid request.' } }
    }
    if (!body || typeof body !== 'object') {
      return { status: 400, jsonBody: { ok: false, message: 'Invalid request.' } }
    }

    if (clean(body.website, 120)) {
      return { status: 201, jsonBody: { ok: true } }
    }

    const name = clean(body.name, 100)
    const email = clean(body.email, 160)
    const phone = clean(body.phone, 40)
    const company = clean(body.company, 120)
    const service = clean(body.service, 60)
    const message = clean(body.message, 2500)

    if (name.length < 2) {
      return { status: 400, jsonBody: { ok: false, message: 'Please enter your full name.' } }
    }
    if (!isEmail(email)) {
      return {
        status: 400,
        jsonBody: { ok: false, message: 'Please enter a valid email address.' },
      }
    }
    if (message.length < 10) {
      return {
        status: 400,
        jsonBody: { ok: false, message: 'Please tell us a little more about your enquiry.' },
      }
    }

    const record = {
      receivedAt: new Date().toISOString(),
      name,
      email,
      phone,
      company,
      service: services.has(service) ? service : 'General enquiry',
      message,
    }

    const transport = mailer()
    if (!transport) {
      context.error('SMTP is not configured; the enquiry could not be delivered.')
      return {
        status: 503,
        jsonBody: {
          ok: false,
          message:
            'Our enquiry service is temporarily unavailable. Please call or email our office.',
        },
      }
    }

    try {
      await transport.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.ENQUIRY_TO || 'office@halygroupltd.com',
        replyTo: email,
        subject: `Website enquiry: ${record.service}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || 'Not provided'}`,
          `Company: ${company || 'Not provided'}`,
          `Service: ${record.service}`,
          '',
          message,
        ].join('\n'),
      })
    } catch (error) {
      context.error('Unable to send the enquiry email:', error)
      return {
        status: 502,
        jsonBody: {
          ok: false,
          message: 'We could not send your enquiry. Please call or email our office directly.',
        },
      }
    }

    context.log(`Enquiry received: ${record.service}`)
    return {
      status: 201,
      jsonBody: {
        ok: true,
        message: 'Your enquiry has been received. Our team will be in touch.',
      },
    }
  },
})
