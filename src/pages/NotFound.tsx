import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFound() {
  usePageMeta(
    'Page not found | Haly Group Limited',
    'The page you are looking for could not be found. Return to Haly Group Limited or contact our team.',
  )

  return (
    <section className="not-found">
      <div className="not-found__grid" aria-hidden="true" />
      <div className="container not-found__inner">
        <span className="eyebrow eyebrow--light">
          <span className="eyebrow__line" />
          Off the route
        </span>
        <span className="not-found__code" aria-hidden="true">
          404
        </span>
        <h1>
          This road
          <br />
          goes no <em>further.</em>
        </h1>
        <p>
          The page you were looking for may have moved. Let&apos;s get you back to a familiar
          route.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="button button--gold">
            Return home
            <span className="button__icon">
              <Icon name="arrowUp" size={18} />
            </span>
          </Link>
          <Link to="/contact" className="button button--ghost">
            Contact our team
          </Link>
        </div>
      </div>
      <span className="not-found__wordmark" aria-hidden="true">
        HALY
      </span>
    </section>
  )
}
