import { processSteps } from '../data/site'
import { Reveal } from './Reveal'

export function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="process-section__head">
          <Reveal>
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow__line" />
              How it works
            </span>
            <h2>
              From first call
              <br />
              to final mile.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p>
              A clear, coordinated process keeps every assignment moving — whether it is one
              journey, one delivery or an ongoing operational need.
            </p>
          </Reveal>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal className="process-step" key={step.number} delay={index * 90}>
              <div className="process-step__top">
                <span>{step.number}</span>
                <span className="process-step__dot" aria-hidden="true" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
