import 'dotenv/config'
import express from 'express'
import { appendFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import nodemailer from 'nodemailer'

const app = express()
const port = Number(process.env.PORT || 3001)
const root = process.cwd()
const dataDir = path.join(root, 'server', 'data')
const enquiryFile = path.join(dataDir, 'enquiries.ndjson')

app.disable('x-powered-by')
app.use(express.json({ limit: '32kb' }))

const requests = new Map()
const WINDOW_MS = 15 * 60 * 1000
const MAX_REQUESTS = 6

const services = new Set([
  'Transport & Car Hire',
  'Travel Agency',
  'Smart Tracking',
  'Light Cargo & Logistics',
  'General enquiry',
])

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

app.get('/api/health', (_request, response) => {
  response.json({ ok: true })
})

app.post('/api/enquiry', async (request, response) => {
  const ip = request.ip || request.socket.remoteAddress || 'unknown'
  if (isRateLimited(ip)) {
    return response.status(429).json({
      ok: false,
      message: 'Too many submissions. Please try again shortly or call our office.',
    })
  }

  const body = request.body || {}

  if (clean(body.website, 120)) {
    return response.status(201).json({ ok: true })
  }

  const name = clean(body.name, 100)
  const email = clean(body.email, 160)
  const phone = clean(body.phone, 40)
  const company = clean(body.company, 120)
  const service = clean(body.service, 60)
  const message = clean(body.message, 2500)

  if (name.length < 2) {
    return response.status(400).json({ ok: false, message: 'Please enter your full name.' })
  }
  if (!isEmail(email)) {
    return response.status(400).json({ ok: false, message: 'Please enter a valid email address.' })
  }
  if (message.length < 10) {
    return response.status(400).json({ ok: false, message: 'Please tell us a little more about your enquiry.' })
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

  try {
    await mkdir(dataDir, { recursive: true })
    await appendFile(enquiryFile, `${JSON.stringify(record)}\n`, 'utf8')
  } catch (error) {
    console.error('Unable to persist enquiry:', error)
    return response.status(500).json({
      ok: false,
      message: 'We could not record your enquiry. Please call or email our office.',
    })
  }

  const transport = mailer()
  if (transport) {
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
      console.error('Enquiry stored, but email notification failed:', error)
    }
  }

  return response.status(201).json({
    ok: true,
    message: 'Your enquiry has been received. Our team will be in touch.',
  })
})

const dist = path.join(root, 'dist')
if (existsSync(dist)) {
  app.use(express.static(dist, { maxAge: '1h', index: false }))
  app.use((request, response, next) => {
    if (request.method !== 'GET' || request.path.startsWith('/api')) return next()
    response.sendFile(path.join(dist, 'index.html'))
  })
}

app.use((error, _request, response, _next) => {
  console.error(error)
  response.status(500).json({ ok: false, message: 'Something went wrong. Please try again.' })
})

app.listen(port, () => {
  console.log(`Haly API listening on http://localhost:${port}`)
})
