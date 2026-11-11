import { Link } from 'react-router-dom'
import { CTASection } from '../components/CTASection'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

const engagementOptions = [
  {
    title: 'One-off requirements',
    description:
      'A single transfer, rental, booking or cargo movement — coordinated with the same attention as an ongoing account.',
    icon: 'spark' as const,
    link: 'Request a one-off service',
  },
  {
    title: 'Recurring operations',
    description:
      'Scheduled staff movement, repeat cargo runs, travel coordination or fleet visibility for day-to-day operations.',
    icon: 'clock' as const,
    link: 'Discuss an ongoing need',
  },
  {
    title: 'Integrated solutions',
    description:
      'Requirements that cross service lines — bringing people, travel and goods into one coordinated plan.',
    icon: 'route' as const,
    link: 'Talk to our team',
  },
]

export function Services() {
  usePageMeta(
    'Services | Haly Group Limited',
    'Explore Haly Group services: transport and car hire, travel agency, smart tracking, and light cargo and logistics solutions.',
  )

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Four ways to move.
            <br />
            One team to <em>call.</em>
          </>
        }
        intro="Mobility, travel, tracking and logistics — connected by one standard of service and one team that knows the whole picture."
        image="/media/services/transport-city.webp"
        imageAlt="A vehicle moving through the city"
        label="Services"
        meta={[
          { label: 'Service lines', value: 'Transport · Travel · Tracking · Logistics' },
          { label: 'Based in', value: 'Dar es Salaam, Tanzania' },
          { label: 'Approach', value: 'Flexible, coordinated, accountable' },
        ]}
      />

      <section className="section section--cream services-overview">
        <div className="container">
          <SectionHeader
            kicker="Choose your starting point"
            title={
              <>
                Start with a service.
                <br />
                Stay for the <em>standard.</em>
              </>
            }
            intro={
              <p>
                Each service line stands on its own. Together, they make it easier to move
                people, goods and operations without losing the thread.
              </p>
            }
          />

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard service={service} key={service.slug} delay={index * 70} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white engagements-section">
        <div className="container">
          <SectionHeader
            kicker="Ways to engage"
            title={
              <>
                A single task.
                <br />
                An ongoing <em>rhythm.</em>
              </>
            }
            intro={
              <p>
                Services and contracts can be tailored to individual client requirements. Bring
                the requirement as it is; we will help shape the right arrangement.
              </p>
            }
          />

          <div className="engagement-grid">
            {engagementOptions.map((option, index) => (
              <Reveal className="engagement-card" key={option.title} delay={index * 80}>
                <span className="engagement-card__icon">
                  <Icon name={option.icon} size={25} />
                </span>
                <span className="engagement-card__index">0{index + 1}</span>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <Link to="/contact" className="text-link">
                  {option.link} <Icon name="arrow" size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Not sure where
            <br />
            to <em>start?</em>
          </>
        }
        intro="Tell us what you need to move. We will help identify the right service — or the right combination."
        image="/media/hero/hero-city.webp"
        imageAlt="Dar es Salaam city"
      />
    </>
  )
}
