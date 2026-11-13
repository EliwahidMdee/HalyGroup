import { Link } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { Icon } from '../components/Icon'
import { ProcessSection } from '../components/ProcessSection'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { industries, services } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { usePointerGlow } from '../hooks/usePointerGlow'
import { getImageSrcSet } from '../lib/images'

const fleet = [
  {
    image: '/media/fleet/toyota-prado.webp',
    title: 'Executive & corporate',
    description: 'Comfortable vehicle options for meetings, airport runs and executive schedules.',
    tag: 'Chauffeur-driven',
  },
  {
    image: '/media/fleet/toyota-alphard.webp',
    title: 'Self-drive & flexible',
    description: 'Flexible rental arrangements for business travel, personal trips and daily needs.',
    tag: 'Self-drive',
  },
  {
    image: '/media/fleet/toyota-coaster.webp',
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
          <picture>
            <source
              media="(max-width: 760px)"
              srcSet="/media/hero/hero-mobility-mobile.webp"
            />
            <img
              src="/media/hero/hero-mobility.webp"
              srcSet={getImageSrcSet('/media/hero/hero-mobility.webp')}
              sizes="100vw"
              alt="A vehicle travelling on an open road"
              fetchPriority="high"
              decoding="async"
              width="1500"
              height="1000"
            />
          </picture>
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
                srcSet={getImageSrcSet('/media/services/transport-staff.webp')}
                sizes="(max-width: 760px) 100vw, 58vw"
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
                srcSet={getImageSrcSet('/media/services/travel-destination.webp')}
                sizes="(max-width: 760px) 50vw, 42vw"
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
                src="/media/services/logistics-cargo.webp"
                srcSet={getImageSrcSet('/media/services/logistics-cargo.webp')}
                sizes="(max-width: 760px) 50vw, 42vw"
                alt="Cargo truck used for light commercial cargo movement"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>03</span>
                Cargo in motion
              </figcaption>
            </Reveal>
            <Reveal className="intro-mosaic__badge" delay={240}>
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
              src="/media/services/logistics-cargo.webp"
              alt="Cargo truck used for light commercial cargo movement"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="duo-panel__content">
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow__line" />
              Light cargo & logistics
            </span>
            <h2>Cargo, handled end to end.</h2>
            <p>
              Light commercial cargo moved with care across urban and intercity routes.
            </p>
            <ul>
              <li>
                <Icon name="check" size={15} /> Same-day & scheduled deliveries
              </li>
              <li>
                <Icon name="check" size={15} /> Urban & intercity routes
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

          <ul className="serve-list">
            {industries.map((industry, index) => (
              <Reveal as="li" className="serve-list__item" key={industry.title} delay={index * 40}>
                <Link to="/industries" className="serve-list__link">
                  <span className="serve-list__number">0{index + 1}</span>
                  <span className="serve-list__icon">
                    <Icon name={industry.icon} size={19} />
                  </span>
                  <span className="serve-list__title">{industry.title}</span>
                  <Icon name="arrowUp" size={16} />
                </Link>
              </Reveal>
            ))}
          </ul>
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
