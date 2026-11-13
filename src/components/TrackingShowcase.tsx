import { Link } from 'react-router-dom'
import type { IconName } from '../data/site'
import { getImageSrcSet } from '../lib/images'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

const trackingFeatures: [IconName, string, string][] = [
  ['gps', 'GPS tracking', 'Location visibility for everyday fleet oversight.'],
  ['camera', 'AI-powered dash cameras', 'In-vehicle camera technology on the road.'],
  ['lock', 'Smart container locking', 'Technology-enabled security for container movements.'],
  ['route', 'Fleet monitoring', 'Monitoring shaped around your operating needs.'],
]

export function TrackingShowcase({
  showCta = true,
  theme = 'dark',
}: {
  showCta?: boolean
  theme?: 'dark' | 'cream'
}) {
  const isCream = theme === 'cream'

  return (
    <section
      className={`section tracking-section${isCream ? ' tracking-section--cream' : ''}`}
      id="smart-tracking"
    >
      <div className="tracking-section__glow" aria-hidden="true" />
      <div className="container tracking-section__grid">
        <div className="tracking-section__content">
          <Reveal>
            <span className={isCream ? 'eyebrow' : 'eyebrow eyebrow--light'}>
              <span className="eyebrow__line" />
              Smart tracking solutions
            </span>
            <h2>
              Eyes on the road.
              <br />
              Control in your hands.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="tracking-section__lead">
              Technology-enabled visibility for the vehicles and assets your operation depends
              on. See more, understand more and make better-informed decisions.
            </p>
          </Reveal>

          <div className="tracking-list">
            {trackingFeatures.map(([icon, title, description], index) => (
              <Reveal className="tracking-list__item" key={title} delay={index * 80}>
                <span className="tracking-list__icon">
                  <Icon name={icon} size={21} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {showCta && (
            <Link to="/services/tracking" className="button button--outline">
              Explore smart tracking
              <span className="button__icon">
                <Icon name="arrowUp" size={18} />
              </span>
            </Link>
          )}
        </div>

        <Reveal className="tracking-board" delay={160}>
          <img
            src="/media/services/tracking-illustration.webp"
            srcSet={getImageSrcSet('/media/services/tracking-illustration.webp')}
            sizes="(max-width: 1024px) 90vw, 48vw"
            alt="Illustrative fleet tracking dashboard showing vehicle locations, route and status"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  )
}
