import { Link } from 'react-router-dom'
import type { IconName } from '../data/site'
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
          <div className="tracking-board__bar">
            <span className="tracking-board__brand">
              <img src="/media/brand/haly-mark-white.png" alt="" />
              HALY / FLEET VIEW
            </span>
            <span className="tracking-board__status">
              <span /> Illustrative
            </span>
          </div>
          <div className="tracking-board__map">
            <img src="/media/services/tracking-map.webp" alt="" loading="lazy" decoding="async" />
            <svg viewBox="0 0 600 520" fill="none" aria-hidden="true">
              <path
                className="tracking-board__route"
                d="M74 421c57-53 101-44 145-104 42-58 31-103 90-139 57-35 108 1 157-49 26-27 42-51 58-79"
              />
            </svg>
            <span className="map-marker map-marker--one">
              <span className="map-marker__dot" />
              <span className="map-marker__label">Vehicle</span>
            </span>
            <span className="map-marker map-marker--two">
              <span className="map-marker__dot" />
              <span className="map-marker__label">Container</span>
            </span>
            <span className="map-marker map-marker--three">
              <span className="map-marker__dot" />
              <span className="map-marker__label">Camera</span>
            </span>
          </div>
          <div className="tracking-board__foot">
            <span>
              <Icon name="gps" size={16} /> Location
            </span>
            <span>
              <Icon name="camera" size={16} /> Vision
            </span>
            <span>
              <Icon name="lock" size={16} /> Security
            </span>
            <span className="tracking-board__note">Illustrative interface — not live data.</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
