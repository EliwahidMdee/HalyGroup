import { Link } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { Icon } from '../components/Icon'
import { LogoWall } from '../components/LogoWall'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { differentiators, values } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function About() {
  usePageMeta(
    'About Haly Group Limited | A Tanzanian service group',
    'Learn about Haly Group Limited, a diversified Tanzanian service company delivering mobility, travel, smart tracking and light cargo solutions.',
  )

  return (
    <>
      <PageHero
        eyebrow="About Haly Group"
        title={
          <>
            Built in Tanzania.
            <br />
            Moving business <em>forward.</em>
          </>
        }
        intro="A diversified service group bringing mobility, travel, smart tracking and logistics together under one trusted brand."
        image="/media/hero/hero-tanzania.webp"
        imageAlt="A vehicle travelling through the Tanzanian landscape"
        label="About"
        meta={[
          { label: 'Head office', value: 'Dar es Salaam, Tanzania' },
          { label: 'Service lines', value: 'Four integrated services' },
          { label: 'Built for', value: 'Corporate, public & private clients' },
        ]}
      />

      <section className="section section--cream about-story">
        <div className="container about-story__grid">
          <div className="about-story__aside">
            <Reveal>
              <span className="eyebrow">
                <span className="eyebrow__line" />
                Our story
              </span>
              <h2>
                A group,
                <br />
                not a single <em>service.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="about-story__quote">
                “Imagine it, we&apos;ll do it.”
              </p>
              <span className="about-story__quote-note">Our founding promise</span>
            </Reveal>
          </div>

          <div className="about-story__body">
            <Reveal>
              <p className="about-story__lead">
                Haly Group Limited is a diversified Tanzanian service company headquartered in
                Dar es Salaam, providing integrated solutions across transportation, travel
                management, smart mobility, and light cargo & logistics services.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Built on reliability, professionalism and customer-focused execution, Haly Group
                Limited has evolved from a car hire and rental company into a multi-service
                platform serving corporates, government institutions, NGOs, SMEs, fleet owners
                and individuals.
              </p>
              <p>
                Our approach combines local expertise, technology-driven solutions and
                operational efficiency to provide flexible services that meet the changing needs
                of our clients.
              </p>
            </Reveal>

            <div className="about-story__images">
              <Reveal as="figure" className="about-story__image about-story__image--large">
                <img
                  src="/media/services/transport-staff.webp"
                  alt="Corporate staff transportation service"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>People · Mobility</figcaption>
              </Reveal>
              <Reveal
                as="figure"
                className="about-story__image about-story__image--small"
                delay={120}
              >
                <img
                  src="/media/services/transport-airport.webp"
                  alt="Airport and hotel transfer service"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Journeys · Connections</figcaption>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream purpose-section">
        <div className="container">
          <SectionHeader
            kicker="Mission & vision"
            title={
              <>
                The reason
                <br />
                we <em>move.</em>
              </>
            }
            intro={
              <p>
                Our direction is simple: build a service group that clients can trust with the
                movement of what matters.
              </p>
            }
          />

          <div className="purpose-grid">
            <Reveal className="purpose-card purpose-card--mission">
              <span className="purpose-card__label">Our mission</span>
              <Icon name="route" size={30} />
              <p>
                To deliver integrated mobility, travel, logistics and smart fleet solutions that
                enhance safety, efficiency and customer confidence through professionalism,
                reliability and operational excellence.
              </p>
            </Reveal>
            <Reveal className="purpose-card purpose-card--vision" delay={120}>
              <span className="purpose-card__label">Our vision</span>
              <Icon name="globe" size={30} />
              <p>
                To become a leading regional service group recognized for trust, technology
                leadership and sustainable value creation across transportation, travel,
                logistics and smart mobility sectors.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container values-section__grid">
          <div className="values-section__head">
            <Reveal>
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow__line" />
                Our values
              </span>
              <h2>
                The standard
                <br />
                behind the <em>service.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p>
                How we work matters as much as what we deliver. These values guide the decisions
                our teams make every day.
              </p>
            </Reveal>
          </div>

          <div className="value-list">
            {values.map((value, index) => (
              <Reveal className="value-list__item" key={value.title} delay={index * 70}>
                <span className="value-list__number">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white differentiators-section">
        <div className="container">
          <SectionHeader
            kicker="Why Haly Group"
            title={
              <>
                More than
                <br />
                the sum of our services.
              </>
            }
            intro={
              <p>
                A multi-service group should make life simpler, not more complicated. Here is
                what that means in practice.
              </p>
            }
          />

          <div className="differentiator-grid">
            {differentiators.map((item, index) => (
              <Reveal className="differentiator-card" key={item.title} delay={index * 60}>
                <span className="differentiator-card__icon">
                  <Icon name={item.icon} size={24} />
                </span>
                <span className="differentiator-card__index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream about-clients">
        <div className="container">
          <SectionHeader
            kicker="In good company"
            title={
              <>
                Trusted across
                <br />
                sectors.
              </>
            }
            intro={
              <p>
                A selection of valued clients from Haly Group&apos;s existing portfolio.
              </p>
            }
            action={
              <Link to="/industries" className="text-link">
                Industries we serve <Icon name="arrow" size={17} />
              </Link>
            }
          />
          <LogoWall />
        </div>
      </section>

      <CTASection
        title={
          <>
            Let&apos;s move
            <br />
            <em>forward.</em>
          </>
        }
        intro="Whether you need one journey or a long-term service partner, the conversation starts here."
        image="/media/hero/hero-city.webp"
        imageAlt="Dar es Salaam city"
      />
    </>
  )
}
