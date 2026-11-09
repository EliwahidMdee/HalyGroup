import { Icon } from '../components/Icon'
import { PageHero } from '../components/PageHero'
import { QuoteForm } from '../components/QuoteForm'
import { Reveal } from '../components/Reveal'
import { faqs, site } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

const nextSteps = [
  {
    number: '01',
    title: 'You share the requirement',
    description: 'Dates, locations, volumes or the outcome you need — as much or as little as you have.',
  },
  {
    number: '02',
    title: 'We review the details',
    description: 'Our team considers the right service, availability and coordination required.',
  },
  {
    number: '03',
    title: 'We come back to you',
    description: 'We follow up to clarify the scope and discuss the next step with you.',
  },
]

export function Contact() {
  usePageMeta(
    'Contact Haly Group Limited | Dar es Salaam, Tanzania',
    'Contact Haly Group Limited in Dar es Salaam. Call +255 774 541 541, email office@halygroupltd.com or send an enquiry.',
  )

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let&apos;s
            <br />
            <em>move.</em>
          </>
        }
        intro="One conversation is all it takes to start. Tell us what you need to move, and our team will help you find the right way forward."
        image="/media/services/transport-airport.webp"
        imageAlt="Airport transfer and ground transportation"
        label="Contact"
        meta={[
          { label: 'Call', value: site.phoneDisplay },
          { label: 'Email', value: site.email },
          { label: 'Visit', value: 'Kijitonyama, Dar es Salaam' },
        ]}
      />

      <section className="section section--cream contact-section" id="enquiry">
        <div className="container contact-section__grid">
          <Reveal className="contact-section__form">
            <QuoteForm />
          </Reveal>

          <aside className="contact-aside">
            <Reveal className="contact-card contact-card--dark">
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow__line" />
                Head office
              </span>
              <h2>Dar es Salaam.</h2>
              <address>
                <span>{site.address.line1}</span>
                <span>{site.address.line2}</span>
                <span>{site.address.line3}</span>
              </address>
              <div className="contact-card__links">
                <a href={`tel:${site.phone}`}>
                  <Icon name="phone" size={18} />
                  <span>
                    <small>Call our team</small>
                    {site.phoneDisplay}
                  </span>
                  <Icon name="arrowUp" size={17} />
                </a>
                <a href={`mailto:${site.email}`}>
                  <Icon name="mail" size={18} />
                  <span>
                    <small>Email us</small>
                    {site.email}
                  </span>
                  <Icon name="arrowUp" size={17} />
                </a>
              </div>
              <div className="contact-card__actions">
                <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="text-link text-link--light">
                  Open in maps <Icon name="arrowUp" size={16} />
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card__social"
                  aria-label="Chat with Haly Group on WhatsApp"
                >
                  <Icon name="whatsapp" size={20} />
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card__social"
                  aria-label="Haly Group on Instagram"
                >
                  <Icon name="instagram" size={20} />
                </a>
              </div>
            </Reveal>

            <Reveal className="contact-card contact-card--paper" delay={100}>
              <span className="eyebrow">
                <span className="eyebrow__line" />
                What happens next
              </span>
              <ol className="next-steps">
                {nextSteps.map((step) => (
                  <li key={step.number}>
                    <span>{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="contact-note" delay={180}>
              <Icon name="clock" size={21} />
              <p>
                Need to reach us directly? Call{' '}
                <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a> or email{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--white faq-section">
        <div className="container faq-section__grid">
          <div className="faq-section__head">
            <Reveal>
              <span className="eyebrow">
                <span className="eyebrow__line" />
                Good to know
              </span>
              <h2>
                Questions,
                <br />
                answered <em>plainly.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p>
                A few things clients often ask before starting a conversation with us. If your
                question is not here, just ask.
              </p>
              <a href={`mailto:${site.email}`} className="text-link">
                Ask our team <Icon name="arrow" size={17} />
              </a>
            </Reveal>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 50}>
                <details className="faq-item">
                  <summary>
                    <span>{faq.question}</span>
                    <span className="faq-item__icon" aria-hidden="true">
                      <Icon name="plus" size={19} />
                    </span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-closing">
        <div className="container contact-closing__inner">
          <span className="eyebrow eyebrow--light">Imagine it, we&apos;ll do it.</span>
          <a href={`tel:${site.phone}`} className="contact-closing__phone">
            {site.phoneDisplay}
            <Icon name="arrowUp" size={28} />
          </a>
          <span className="contact-closing__location">
            <Icon name="pin" size={15} /> Dar es Salaam, Tanzania
          </span>
        </div>
      </section>
    </>
  )
}
