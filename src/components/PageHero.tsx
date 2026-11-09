import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  intro: string
  image: string
  imageAlt: string
  label: string
  meta?: { label: string; value: string }[]
  children?: ReactNode
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  label,
  meta,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__media" aria-hidden="true">
        <img src={image} alt={imageAlt} fetchPriority="high" decoding="async" />
      </div>
      <div className="page-hero__shade" aria-hidden="true" />
      <div className="page-hero__grid" aria-hidden="true" />

      <div className="container page-hero__inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{label}</span>
        </nav>

        <div className="page-hero__content">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow__line" />
            {eyebrow}
          </span>
          <h1>{title}</h1>
          <div className="page-hero__intro-row">
            <p>{intro}</p>
            {children}
          </div>
        </div>

        {meta && meta.length > 0 && (
          <div className="page-hero__meta">
            {meta.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        )}
      </div>

      <span className="page-hero__side-label" aria-hidden="true">
        HALY GROUP · {label.toUpperCase()}
      </span>
      <span className="page-hero__scroll" aria-hidden="true">
        Scroll <Icon name="arrow" size={16} />
      </span>
    </section>
  )
}
