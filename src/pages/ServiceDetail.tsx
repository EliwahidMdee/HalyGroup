import { Link, useParams } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { services } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { NotFound } from './NotFound'

const galleries: Record<string, { src: string; alt: string; label: string }[]> = {
  transport: [
    { src: '/media/services/transport-selfdrive.webp', alt: 'Self-drive rental vehicle', label: 'Self-drive' },
    { src: '/media/services/transport-airport.webp', alt: 'Airport and hotel transfer', label: 'Transfers' },
    { src: '/media/services/transport-staff.webp', alt: 'Corporate staff transportation', label: 'Corporate' },
  ],
  travel: [
    { src: '/media/services/travel-airport.webp', alt: 'Aircraft at an airport', label: 'Flights' },
    { src: '/media/services/travel-hotel.webp', alt: 'Hotel accommodation', label: 'Stay' },
    { src: '/media/services/travel-destination.webp', alt: 'Coastal travel destination', label: 'Journeys' },
  ],
  tracking: [
    { src: '/media/services/tracking-gps.webp', alt: 'GPS tracking service', label: 'GPS' },
    { src: '/media/services/tracking-dashboard.webp', alt: 'Vehicle dashboard technology', label: 'Insight' },
    { src: '/media/services/tracking-map.webp', alt: 'Map and route visibility', label: 'Visibility' },
  ],
  logistics: [
    { src: '/media/services/logistics-cargo.webp', alt: 'Light commercial cargo', label: 'Cargo' },
    { src: '/media/services/logistics-parcels.webp', alt: 'Parcels prepared for delivery', label: 'Parcels' },
    { src: '/media/services/logistics-courier.webp', alt: 'Courier delivery service', label: 'Courier' },
  ],
}

export function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  usePageMeta(
    service ? `${service.title} | Haly Group Limited` : 'Service not found | Haly Group Limited',
    service ? service.description : 'The requested service could not be found.',
  )

  if (!service) return <NotFound />

  const index = services.findIndex((item) => item.slug === service.slug)
  const related = services.filter((item) => item.slug !== service.slug)
  const gallery = galleries[service.slug] ?? []

  return (
    <>
      <PageHero
        eyebrow={`Service line 0${index + 1}`}
        title={
          <>
            {service.title}
            <span className="page-hero__title-dot">.</span>
          </>
        }
        intro={service.summary}
        image={service.heroImage}
        imageAlt={service.imageAlt}
        label={service.navTitle}
        meta={[
          { label: 'Service line', value: `0${index + 1} / 04` },
          { label: 'Based in', value: 'Dar es Salaam, Tanzania' },
          { label: 'Built for', value: service.idealFor[0] },
        ]}
      />

      <section className="section section--cream service-intro">
        <div className="container">
          <Link to="/services" className="back-link">
            <Icon name="arrow" size={16} /> All services
          </Link>

          <div className="service-intro__grid">
            <Reveal>
              <span className="eyebrow">
                <span className="eyebrow__line" />
                What we do
              </span>
              <h2>
                {service.slug === 'transport' && (
                  <>The right vehicle, for the way you move.</>
                )}
                {service.slug === 'travel' && <>Travel, planned around you.</>}
                {service.slug === 'tracking' && <>A clearer view of your operation.</>}
                {service.slug === 'logistics' && <>From documents to the last mile.</>}
              </h2>
            </Reveal>
            <Reveal className="service-intro__copy" delay={100}>
              <p className="service-intro__lead">{service.description}</p>
              <div className="service-intro__note">
                <Icon name="shield" size={21} />
                <p>{service.note}</p>
              </div>
            </Reveal>
          </div>

          <div className="offerings-grid">
            {service.offerings.map((offering, offeringIndex) => (
              <Reveal className="offering-card" key={offering.title} delay={offeringIndex * 55}>
                <span className="offering-card__index">
                  {String(offeringIndex + 1).padStart(2, '0')}
                </span>
                <h3>{offering.title}</h3>
                <p>{offering.description}</p>
                <span className="offering-card__line" aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="service-gallery" aria-label={`${service.title} in practice`}>
          {gallery.map((image, galleryIndex) => (
            <Reveal as="figure" className="service-gallery__item" key={image.src} delay={galleryIndex * 80}>
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <figcaption>
                <span>0{galleryIndex + 1}</span>
                {image.label}
              </figcaption>
            </Reveal>
          ))}
        </section>
      )}

      {service.feature && (
        <section
          className={`section service-feature ${
            service.feature.theme === 'dark' ? 'service-feature--dark' : 'service-feature--light'
          }`}
        >
          <div className="container service-feature__grid">
            <Reveal className="service-feature__media">
              <img
                src={service.feature.image}
                alt={service.feature.imageAlt}
                loading="lazy"
                decoding="async"
              />
              <span className="service-feature__stamp">
                <img src="/media/brand/haly-mark-white.png" alt="" aria-hidden="true" />
                <span>Haly Group</span>
              </span>
            </Reveal>

            <Reveal className="service-feature__content" delay={100}>
              <span
                className={`eyebrow ${
                  service.feature.theme === 'dark' ? 'eyebrow--light' : ''
                }`}
              >
                <span className="eyebrow__line" />
                {service.feature.kicker}
              </span>
              <h2>{service.feature.title}</h2>
              <p>{service.feature.body}</p>
              <ul className="feature-points">
                {service.feature.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={16} />
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="text-link">
                Discuss your requirement <Icon name="arrow" size={17} />
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section section--white ideal-section">
        <div className="container ideal-section__grid">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow__line" />
              Built around your requirement
            </span>
            <h2>
              Who this
              <br />
              service is <em>for.</em>
            </h2>
          </Reveal>
          <Reveal className="ideal-section__content" delay={100}>
            <p>
              From a single request to an ongoing operational need, this service can be shaped
              around the client, the schedule and the level of coordination required.
            </p>
            <ul className="chip-list">
              {service.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link to="/contact" className="button button--navy">
              Start an enquiry
              <span className="button__icon">
                <Icon name="arrowUp" size={18} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream related-section">
        <div className="container">
          <div className="related-section__head">
            <Reveal>
              <span className="eyebrow">
                <span className="eyebrow__line" />
                Keep moving
              </span>
              <h2>Explore another service line.</h2>
            </Reveal>
          </div>
          <div className="related-grid">
            {related.map((item, relatedIndex) => (
              <Reveal key={item.slug} delay={relatedIndex * 60}>
                <Link to={`/services/${item.slug}`} className="related-card">
                  <span className="related-card__media">
                    <img src={item.image} alt="" loading="lazy" decoding="async" />
                  </span>
                  <span className="related-card__content">
                    <span>{item.kicker}</span>
                    <strong>{item.title}</strong>
                    <Icon name="arrowUp" size={21} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Ready when
            <br />
            you <em>are.</em>
          </>
        }
        intro={`Tell us what you need from ${service.title.toLowerCase()}. Our team will help shape the next step.`}
      />
    </>
  )
}
