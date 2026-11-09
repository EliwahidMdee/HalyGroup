import { useState } from 'react'
import type { FormEvent } from 'react'
import { serviceOptions, site } from '../data/site'
import { Icon } from './Icon'

type FormState = {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
  consent: boolean
  website: string
}

type FormErrors = Partial<Record<keyof FormState, string>>
type Status = 'idle' | 'loading' | 'success' | 'error'

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
  consent: false,
  website: '',
}

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [responseMessage, setResponseMessage] = useState('')

  const update = <Key extends keyof FormState>(key: Key, value: FormState[Key]) => {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
    if (status === 'error') setStatus('idle')
  }

  const validate = () => {
    const next: FormErrors = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.service) next.service = 'Please select the service you need.'
    if (form.message.trim().length < 10) {
      next.message = 'Please share a little more about your requirement.'
    }
    if (!form.consent) next.consent = 'Please confirm that we may contact you about this enquiry.'
    return next
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('loading')
    setResponseMessage('')

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean
        message?: string
      }

      if (!response.ok || !data.ok) {
        throw new Error(data.message || 'We could not send your enquiry. Please try again.')
      }

      setStatus('success')
      setResponseMessage(data.message || 'Your enquiry has been received. Our team will be in touch.')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setResponseMessage(
        error instanceof Error
          ? error.message
          : 'We could not send your enquiry. Please try again or contact our office directly.',
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <span className="form-success__icon">
          <Icon name="check" size={30} />
        </span>
        <span className="eyebrow">Enquiry received</span>
        <h3>Thank you. We&apos;ll take it from here.</h3>
        <p>{responseMessage}</p>
        <div className="form-success__actions">
          <button
            type="button"
            className="button button--navy"
            onClick={() => {
              setStatus('idle')
              setResponseMessage('')
            }}
          >
            Send another enquiry
          </button>
          <a href={`tel:${site.phone}`} className="text-link">
            Or call {site.phoneDisplay} <Icon name="arrowUp" size={16} />
          </a>
        </div>
      </div>
    )
  }

  return (
    <form className="quote-form" onSubmit={onSubmit} noValidate>
      <div className="quote-form__head">
        <span className="eyebrow">
          <span className="eyebrow__line" />
          Tell us what you need
        </span>
        <h2>Request a quote.</h2>
        <p>
          Share a few details and our team will follow up to understand the requirement.
          Fields marked * are required.
        </p>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="enquiry-name">Full name *</label>
          <input
            id="enquiry-name"
            name="name"
            autoComplete="name"
            maxLength={100}
            value={form.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Your name"
          />
          {errors.name && (
            <span className="field__error" id="name-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="enquiry-email">Email address *</label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={160}
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="you@company.com"
          />
          {errors.email && (
            <span className="field__error" id="email-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="enquiry-phone">Phone number</label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={40}
            value={form.phone}
            onChange={(event) => update('phone', event.target.value)}
            placeholder="+255"
          />
        </div>

        <div className="field">
          <label htmlFor="enquiry-company">Company / organisation</label>
          <input
            id="enquiry-company"
            name="company"
            autoComplete="organization"
            maxLength={120}
            value={form.company}
            onChange={(event) => update('company', event.target.value)}
            placeholder="Optional"
          />
        </div>

        <div className="field field--full">
          <label htmlFor="enquiry-service">Service required *</label>
          <div className="select-wrap">
            <select
              id="enquiry-service"
              name="service"
              value={form.service}
              onChange={(event) => update('service', event.target.value)}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? 'service-error' : undefined}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <Icon name="chevron" size={18} />
          </div>
          {errors.service && (
            <span className="field__error" id="service-error">
              {errors.service}
            </span>
          )}
        </div>

        <div className="field field--full">
          <label htmlFor="enquiry-message">Your requirement *</label>
          <textarea
            id="enquiry-message"
            name="message"
            rows={5}
            maxLength={2500}
            value={form.message}
            onChange={(event) => update('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            placeholder="Dates, locations, number of people or items, and anything else we should know."
          />
          {errors.message && (
            <span className="field__error" id="message-error">
              {errors.message}
            </span>
          )}
        </div>
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="enquiry-website">Website</label>
        <input
          id="enquiry-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => update('website', event.target.value)}
        />
      </div>

      <label className={`consent ${errors.consent ? 'has-error' : ''}`}>
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => update('consent', event.target.checked)}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
        />
        <span>
          I agree to be contacted about this enquiry. My details will only be used to
          respond to this request.
        </span>
      </label>
      {errors.consent && (
        <span className="field__error" id="consent-error">
          {errors.consent}
        </span>
      )}

      {status === 'error' && (
        <div className="form-alert" role="alert">
          <Icon name="close" size={18} />
          <div>
            <strong>Your enquiry was not sent.</strong>
            <span>{responseMessage}</span>
            <a href={`mailto:${site.email}`}>Email {site.email}</a>
          </div>
        </div>
      )}

      <div className="quote-form__foot">
        <button type="submit" className="button button--navy" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending enquiry…' : 'Send enquiry'}
          <span className="button__icon">
            <Icon name="arrowUp" size={18} />
          </span>
        </button>
        <p>
          Prefer to speak?{' '}
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </p>
      </div>
    </form>
  )
}
