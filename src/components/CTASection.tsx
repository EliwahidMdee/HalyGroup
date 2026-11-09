import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

type CTASectionProps = {
  eyebrow?: string
  title: ReactNode
  intro: string
  image?: string
  imageAlt?: string
}

export function CTASection({
  eyebrow = 'Start a conversation',
  title,
  intro,
  image = '/media/hero/hero-tanzania.webp',
  imageAlt = 'A vehicle travelling through the Tanzanian landscape',
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="cta-section__media" aria-hidden="true">
        <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
      </div>
      <div className="cta-section__shade" aria-hidden="true" />
      <div className="cta-section__lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container cta-section__inner">
        <Reveal className="cta-section__content">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow__line" />
            {eyebrow}
          </span>
          <h2>{title}</h2>
          <p>{intro}</p>
          <div className="cta-section__actions">
            <Link to="/contact" className="button button--gold">
              Request a quote
              <span className="button__icon">
                <Icon name="arrowUp" size={18} />
              </span>
            </Link>
            <a href={`tel:${site.phone}`} className="button button--ghost">
              <Icon name="phone" size={17} />
              {site.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal className="cta-section__aside" delay={140}>
          <span className="eyebrow eyebrow--light">Our promise</span>
          <p>Driving comfort. Delivering reliability.</p>
          <a href={`mailto:${site.email}`}>
            {site.email} <Icon name="arrowUp" size={16} />
          </a>
        </Reveal>
      </div>

      <span className="cta-section__wordmark" aria-hidden="true">
        HALY
      </span>
    </section>
  )
}
