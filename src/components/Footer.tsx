import { Link } from 'react-router-dom'
import { services, site } from '../data/site'
import { Icon } from './Icon'
import { Logo } from './Logo'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__ambient" aria-hidden="true" />
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link to="/" aria-label="Haly Group Limited home">
              <Logo variant="white" />
            </Link>
            <p>
              Integrated mobility, travel, tracking and logistics — built in Dar es Salaam
              for the way people and business move.
            </p>
            <div className="site-footer__social">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Haly Group on Instagram"
              >
                <Icon name="instagram" size={19} />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Haly Group on WhatsApp"
              >
                <Icon name="whatsapp" size={19} />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email Haly Group">
                <Icon name="mail" size={19} />
              </a>
            </div>
          </div>

          <div className="site-footer__column">
            <h2>Services</h2>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>{service.navTitle}</Link>
                </li>
              ))}
              <li>
                <Link to="/services">All services</Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__column">
            <h2>Company</h2>
            <ul>
              <li>
                <Link to="/about">About Haly Group</Link>
              </li>
              <li>
                <Link to="/industries">Industries we serve</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/contact#enquiry">Request a quote</Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__column site-footer__contact">
            <h2>Find us</h2>
            <address>
              <span>{site.address.line1}</span>
              <span>{site.address.line2}</span>
              <span>{site.address.line3}</span>
            </address>
            <a href={`tel:${site.phone}`} className="site-footer__contact-link">
              <Icon name="phone" size={16} /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="site-footer__contact-link">
              <Icon name="mail" size={16} /> {site.email}
            </a>
          </div>
        </div>

        <div className="site-footer__statement">
          <span className="eyebrow">Imagine it, we&apos;ll do it.</span>
          <span>Travel · Mobility · Light Cargo / Logistics</span>
        </div>

        <div className="site-footer__bottom">
          <span>© {currentYear} Haly Group Limited. All rights reserved.</span>
          <span>Dar es Salaam · Tanzania</span>
          <button
            type="button"
            className="site-footer__top-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top <Icon name="arrowUp" size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}
