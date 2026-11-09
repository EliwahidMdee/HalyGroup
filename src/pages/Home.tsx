import { Link } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { Icon } from '../components/Icon'
import { LogoWall } from '../components/LogoWall'
import { Marquee } from '../components/Marquee'
import { ProcessSection } from '../components/ProcessSection'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { ServiceCard } from '../components/ServiceCard'
import type { IconName } from '../data/site'
import { industries, services } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { usePointerGlow } from '../hooks/usePointerGlow'

const fleet = [
  {
    image: '/media/fleet/fleet-6.webp',
    title: 'Executive & corporate',
    description: 'Comfortable vehicle options for meetings, airport runs and executive schedules.',
    tag: 'Chauffeur-driven',
  },
  {
    image: '/media/fleet/fleet-23.webp',
    title: 'Self-drive & flexible',
    description: 'Flexible rental arrangements for business travel, personal trips and daily needs.',
    tag: 'Self-drive',
  },
  {
    image: '/media/fleet/fleet-35-1.webp',
    title: 'Group & staff movement',
    description: 'Coordinated vehicle options for teams, visitors and group itineraries.',
    tag: 'Group mobility',
  },
]

export function Home() {
  const heroRef = usePointerGlow<HTMLElement>()

  usePageMeta(
    'Haly Group Limited | Travel, Mobility & Light Cargo',
    'Integrated transport, corporate travel, smart tracking and light cargo solutions from Dar es Salaam, Tanzania.',
  )

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="hero__media">
          <img
            src="/media/hero/hero-mobility.webp"
            srcSet="/media/hero/hero-mobility-1200.webp 1200w, /media/hero/hero-mobility.webp 2400w"
            sizes="100vw"
            alt="A vehicle travelling on an open road"
            fetchPriority="high"
            decoding="async"
            width="2400"
            height="1600"
          />
        </div>
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />
        <img className="hero__watermark" src="/media/brand/haly-mark-white.png" alt="" aria-hidden="true" />

        <svg className="hero__route" viewBox="0 0 1440 760" fill="none" aria-hidden="true">
          <path
            className="hero__route-line"
            d="M-80 610C170 566 258 457 420 453c168-4 212 117 373 88 160-30 235-180 400-179 130 1 202 55 330 70"
          />
          <circle cx="420" cy="453" r="5" />
          <circle cx="793" cy="541" r="5" />
          <circle cx="1193" cy="362" r="5" />
        </svg>

        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__eyebrow">
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow__line" />
                Travel · Mobility · Light Cargo
              </span>
              <span className="hero__edition">Dar es Salaam · Tanzania</span>
            </div>

            <h1>
              Moving people.
              <br />
              Connecting <span>possibilities.</span>
            </h1>

            <div className="hero__bottom">
              <p>
                One Tanzanian partner for transport, travel management, smart tracking and
                light cargo — delivered with the precision your plans depend on.
              </p>
              <div className="hero__actions">
                <Link to="/contact" className="button button--gold">
                  Plan your journey
                  <span className="button__icon">
                    <Icon name="arrowUp" size={18} />
                  </span>
                </Link>
                <Link to="/services" className="button button--ghost">
                  Explore services
                  <Icon name="arrow" size={18} />
                </Link>
              </div>
            </div>
          </div>

          <Reveal className="hero__aside" delay={260}>
            <span className="hero__aside-kicker">Head office</span>
            <strong>Dar es Salaam, Tanzania</strong>
            <span className="hero__aside-rule" />
            <p>Built on reliability, professionalism and customer-focused execution.</p>
            <Link to="/about">
              Meet Haly Group <Icon name="arrowUp" size={17} />
            </Link>
          </Reveal>
        </div>

        <div className="container hero__services-wrap">
          <div className="hero__services">
            {services.map((service, index) => (
              <Link to={`/services/${service.slug}`} className="hero-service" key={service.slug}>
                <span className="hero-service__index">0{index + 1}</span>
                <span className="hero-service__name">{service.navTitle}</span>
                <Icon name="arrowUp" size={17} />
              </Link>
            ))}
          </div>
        </div>

        <span className="hero__side-copy" aria-hidden="true">
          Your seamless gateway to anywhere
        </span>
        <span className="hero__scroll" aria-hidden="true">
          <span /> Scroll to discover
        </span>
      </section>

      <section className="section section--cream intro-section">
        <div className="container">
          <div className="intro-section__lead">
            <Reveal>
              <span className="eyebrow">
                <span className="eyebrow__line" />
                The Haly approach
              </span>
              <h2>
                One group.
                <br />
                More ways to <em>move.</em>
              </h2>
            </Reveal>
            <Reveal className="intro-section__copy" delay={120}>
              <p>
                Haly Group Limited is a diversified Tanzanian service company headquartered in
                Dar es Salaam. We bring mobility, travel, smart tracking and light cargo together
                so people and businesses can keep moving without managing a maze of suppliers.
              </p>
              <p>
                Our approach combines local expertise, technology-driven solutions and
                operational efficiency — with services shaped around the changing needs of our
                clients.
              </p>
              <Link to="/about" className="text-link">
                Our story <Icon name="arrow" size={17} />
              </Link>
            </Reveal>
          </div>

          <div className="intro-mosaic">
            <Reveal as="figure" className="intro-mosaic__main">
              <img
                src="/media/services/transport-staff.webp"
                alt="Corporate staff transportation service"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>01</span>
                People in motion
              </figcaption>
            </Reveal>
            <Reveal as="figure" className="intro-mosaic__small intro-mosaic__small--top" delay={100}>
              <img
                src="/media/services/travel-destination.webp"
                alt="Coastal destination representing travel planning"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>02</span>
                Journeys planned
              </figcaption>
            </Reveal>
            <Reveal as="figure" className="intro-mosaic__small intro-mosaic__small--bottom" delay={180}>
              <img
                src="/media/services/logistics-documents.webp"
                alt="Document and parcel transportation service"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>03</span>
                Details delivered
              </figcaption>
            </Reveal>
            <Reveal className="intro-mosaic__badge" delay={240}>
              <Icon name="spark" size={22} />
              <span>
                Four service lines
                <br />
                One accountable partner
              </span>
            </Reveal>
          </div>

          <div className="intro-facts">
            <div>
              <strong>Based in</strong>
              <span>Dar es Salaam, Tanzania</span>
            </div>
            <div>
              <strong>Built for</strong>
              <span>Corporate, public & private clients</span>
            </div>
            <div>
              <strong>Focused on</strong>
              <span>Reliability, safety & efficiency</span>
            </div>
            <div>
              <strong>Our outlook</strong>
              <span>Local expertise. Regional ambition.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white services-home" id="services">
        <div className="container">
          <SectionHeader
            kicker="What we do"
            title={
              <>
                Four service lines.
                <br />
                One standard.
              </>
            }
            intro={
              <p>
                Choose the service you need — or bring us a requirement that crosses more than
                one. Our teams work together so the experience feels seamless.
              </p>
            }
            action={
              <Link to="/services" className="text-link">
                All services <Icon name="arrow" size={17} />
              </Link>
            }
          />

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard service={service} key={service.slug} delay={index * 80} />
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      <ProcessSection />

      <section className="section section--cream fleet-section">
        <div className="container">
          <SectionHeader
            kicker="The fleet"
            title={
              <>
                Vehicles that fit
                <br />
                the assignment.
              </>
            }
            intro={
              <p>
                From executive travel to self-drive rentals and group movement, we help match
                the vehicle to the requirement — not the other way around.
              </p>
            }
            action={
              <Link to="/services/transport" className="text-link">
                Transport & Car Hire <Icon name="arrow" size={17} />
              </Link>
            }
          />

          <div className="fleet-grid">
            {fleet.map((item, index) => (
              <Reveal as="article" className="fleet-card" key={item.title} delay={index * 90}>
                <span className="fleet-card__tag">{item.tag}</span>
                <span className="fleet-card__index">0{index + 1}</span>
                <div className="fleet-card__media">
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="fleet-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="section-note">
            Vehicle options, availability and inclusions are confirmed against your requirement
            before booking.
          </p>
        </div>
      </section>

      <section className="section tracking-section">
        <div className="tracking-section__glow" aria-hidden="true" />
        <div className="container tracking-section__grid">
          <div className="tracking-section__content">
            <Reveal>
              <span className="eyebrow eyebrow--light">
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
              {[
                ['gps', 'GPS tracking', 'Location visibility for everyday fleet oversight.'],
                ['camera', 'AI-powered dash cameras', 'In-vehicle camera technology on the road.'],
                ['lock', 'Smart container locking', 'Technology-enabled security for container movements.'],
                ['route', 'Fleet monitoring', 'Monitoring shaped around your operating needs.'],
              ].map(([icon, title, description], index) => (
                <Reveal className="tracking-list__item" key={title} delay={index * 80}>
                  <span className="tracking-list__icon">
                    <Icon name={icon as IconName} size={21} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Link to="/services/tracking" className="button button--outline">
              Explore smart tracking
              <span className="button__icon">
                <Icon name="arrowUp" size={18} />
              </span>
            </Link>
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
              <img
                src="/media/services/tracking-map.webp"
                alt=""
                loading="lazy"
                decoding="async"
              />
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

      <section className="duo-section">
        <div className="duo-panel duo-panel--travel">
          <div className="duo-panel__media">
            <img
              src="/media/services/travel-destination.webp"
              alt="A coastal destination representing travel planning"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="duo-panel__content">
            <span className="eyebrow">
              <span className="eyebrow__line" />
              Travel agency
            </span>
            <h2>Wherever next begins here.</h2>
            <p>
              Flights, hotels, documentation and ground transfers — planned around the way you
              want to travel.
            </p>
            <ul>
              <li>
                <Icon name="check" size={15} /> Domestic & international flights
              </li>
              <li>
                <Icon name="check" size={15} /> Hotels & travel documentation
              </li>
              <li>
                <Icon name="check" size={15} /> Corporate, leisure & city transfers
              </li>
            </ul>
            <Link to="/services/travel" className="text-link">
              Plan your travel <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>

        <div className="duo-panel duo-panel--cargo">
          <div className="duo-panel__media">
            <img
              src="/media/services/logistics-parcels.webp"
              alt="Parcels prepared for delivery"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="duo-panel__content">
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow__line" />
              Light cargo & logistics
            </span>
            <h2>The last mile, handled.</h2>
            <p>
              Documents, parcels and light commercial cargo moved with care across urban and
              intercity routes.
            </p>
            <ul>
              <li>
                <Icon name="check" size={15} /> Same-day & scheduled deliveries
              </li>
              <li>
                <Icon name="check" size={15} /> B2B & document movements
              </li>
              <li>
                <Icon name="check" size={15} /> Small commercial cargo
              </li>
            </ul>
            <Link to="/services/logistics" className="text-link text-link--light">
              Move with Haly <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white industries-home">
        <div className="container">
          <SectionHeader
            kicker="Who we serve"
            title={
              <>
                Built for the way
                <br />
                East Africa moves.
              </>
            }
            intro={
              <p>
                Our services support organisations and individuals with different rhythms,
                requirements and definitions of urgent.
              </p>
            }
            action={
              <Link to="/industries" className="text-link">
                Explore industries <Icon name="arrow" size={17} />
              </Link>
            }
          />

          <div className="industry-grid">
            {industries.map((industry, index) => (
              <Reveal as="article" className="industry-card" key={industry.title} delay={index * 50}>
                <span className="industry-card__index">0{index + 1}</span>
                <span className="industry-card__icon">
                  <Icon name={industry.icon} size={24} />
                </span>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream clients-section">
        <div className="container">
          <SectionHeader
            kicker="Our clients"
            title={
              <>
                In good
                <br />
                company.
              </>
            }
            intro={
              <p>
                A selection of valued clients from Haly Group&apos;s existing portfolio — across
                corporate, institutional, travel and logistics environments.
              </p>
            }
            align="split"
          />
          <LogoWall />
        </div>
      </section>

      <CTASection
        eyebrow="Start a conversation"
        title={
          <>
            Imagine it.
            <br />
            <em>We&apos;ll do it.</em>
          </>
        }
        intro="Tell us what you need to move — people, goods or a whole operation. Our team will help shape the next step."
      />
    </>
  )
}
