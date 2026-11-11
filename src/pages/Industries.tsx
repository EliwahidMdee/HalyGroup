import { Link } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { industries } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

const sectorSupport: Record<string, string[]> = {
  'Corporate & Multinational Companies': [
    'Staff & executive transport',
    'Corporate travel coordination',
    'Light cargo movement',
  ],
  'Government & NGOs': [
    'Coordinated ground transport',
    'Travel & accommodation support',
    'Light cargo support',
  ],
  'Travel & Tourism': [
    'Airport & hotel transfers',
    'City & intercity movement',
    'Travel planning',
  ],
  'Financial Institutions': [
    'Staff mobility',
    'Executive travel',
    'Fleet visibility',
  ],
  'Logistics & E-commerce': [
    'Scheduled cargo runs',
    'Light commercial cargo',
    'Fleet visibility',
  ],
  'Events & Hospitality': [
    'Group transfers',
    'Guest movement',
    'Ground coordination',
  ],
  'SMEs & Fleet Owners': [
    'Flexible car hire',
    'Light cargo support',
    'Smart tracking',
  ],
  'Individual Vehicle Owners': [
    'Self-drive rental',
    'Chauffeur arrangements',
    'Vehicle tracking',
  ],
}

const tailoring = [
  {
    title: 'Understand the operating rhythm',
    description:
      'A single transfer and a daily staff movement are different problems. We start with how your requirement actually runs.',
  },
  {
    title: 'Match the service to the need',
    description:
      'Vehicle, itinerary, cargo schedule or tracking setup — the solution is shaped around the assignment, not a fixed script.',
  },
  {
    title: 'Keep the arrangement flexible',
    description:
      'Services and contracts can be tailored to individual client requirements as priorities and volumes change.',
  },
]

export function Industries() {
  usePageMeta(
    'Industries we serve | Haly Group Limited',
    'Haly Group supports corporates, government, NGOs, travel, finance, logistics, events, SMEs and individuals with integrated mobility and logistics services.',
  )

  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title={
          <>
            Sector-ready.
            <br />
            Assignment-<em>specific.</em>
          </>
        }
        intro="Different sectors move differently. We shape transport, travel, tracking and cargo support around the way your organisation actually works."
        image="/media/hero/hero-city.webp"
        imageAlt="Dar es Salaam city and traffic"
        label="Industries"
        meta={[
          { label: 'Reach', value: 'Corporate, public & private clients' },
          { label: 'Base', value: 'Dar es Salaam, Tanzania' },
          { label: 'Services', value: 'Transport · Travel · Tracking · Logistics' },
        ]}
      />

      <section className="section section--cream sector-section">
        <div className="container">
          <SectionHeader
            kicker="Who we work with"
            title={
              <>
                Eight sectors.
                <br />
                One connected <em>approach.</em>
              </>
            }
            intro={
              <p>
                Our service lines are designed to combine. A corporate client can move staff,
                book travel and track a fleet without starting a new relationship for every
                requirement.
              </p>
            }
          />

          <div className="sector-grid">
            {industries.map((industry, index) => (
              <Reveal as="article" className="sector-card" key={industry.title} delay={index * 55}>
                <div className="sector-card__top">
                  <span className="sector-card__icon">
                    <Icon name={industry.icon} size={25} />
                  </span>
                  <span className="sector-card__index">0{index + 1}</span>
                </div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <ul>
                  {(sectorSupport[industry.title] ?? []).map((item) => (
                    <li key={item}>
                      <Icon name="check" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" aria-label={`Discuss services for ${industry.title}`}>
                  Discuss your requirement <Icon name="arrowUp" size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white tailoring-section">
        <div className="container">
          <SectionHeader
            kicker="How we tailor"
            title={
              <>
                The requirement
                <br />
                comes <em>first.</em>
              </>
            }
            intro={
              <p>
                No two operating environments are identical. We use a straightforward process to
                get to the right arrangement.
              </p>
            }
          />

          <div className="tailoring-grid">
            {tailoring.map((item, index) => (
              <Reveal className="tailoring-card" key={item.title} delay={index * 90}>
                <span className="tailoring-card__number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sector-cta">
        <div className="container sector-cta__inner">
          <Reveal>
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow__line" />
              Built to fit
            </span>
            <h2>
              Your sector.
              <br />
              Your <em>rhythm.</em>
            </h2>
          </Reveal>
          <Reveal className="sector-cta__content" delay={100}>
            <p>
              Tell us how your organisation moves. We will help identify the service — or
              combination of services — that makes the most sense.
            </p>
            <Link to="/contact" className="button button--gold">
              Start a conversation
              <span className="button__icon">
                <Icon name="arrowUp" size={18} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={
          <>
            One partner.
            <br />
            More <em>possibilities.</em>
          </>
        }
        intro="From a single transfer to a connected service arrangement, our team is ready to help."
        image="/media/hero/hero-tanzania.webp"
        imageAlt="A vehicle travelling through Tanzania"
      />
    </>
  )
}
