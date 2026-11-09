import { Link } from 'react-router-dom'
import type { Service } from '../data/site'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

type ServiceCardProps = {
  service: Service
  delay?: number
  compact?: boolean
}

export function ServiceCard({ service, delay = 0, compact = false }: ServiceCardProps) {
  return (
    <Reveal as="article" className={`service-card ${compact ? 'service-card--compact' : ''}`} delay={delay}>
      <Link to={`/services/${service.slug}`} className="service-card__link">
        <div className="service-card__media">
          <img src={service.image} alt={service.imageAlt} loading="lazy" decoding="async" />
        </div>
        <div className="service-card__shade" aria-hidden="true" />
        <div className="service-card__top">
          <span className="service-card__index">{service.kicker.split('/')[0]}</span>
          <span className="service-card__type">{service.kicker.split('/')[1]}</span>
        </div>
        <div className="service-card__content">
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
          <div className="service-card__foot">
            <span>Explore service</span>
            <span className="service-card__arrow">
              <Icon name="arrowUp" size={19} />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}
