import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, services, site } from '../data/site'
import { Icon } from './Icon'
import { Logo } from './Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [lastPath, setLastPath] = useState('')
  const location = useLocation()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    setMegaOpen(false)
    setMenuOpen(false)
    setMobileServices(false)
  }

  useEffect(() => {
    if (!menuOpen) return

    const previous = document.activeElement as HTMLElement | null
    document.body.classList.add('menu-active')
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !menuRef.current) return

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null)

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-active')
      window.removeEventListener('keydown', onKeyDown)
      if (previous && document.contains(previous)) previous.focus()
    }
  }, [menuOpen])

  const closeMega = () => setMegaOpen(false)

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}>
        <div className="utility-bar">
          <div className="container utility-bar__inner">
            <span className="utility-bar__location">
              <Icon name="pin" size={13} />
              Dar es Salaam, Tanzania
            </span>
            <div className="utility-bar__links">
              <a href={`tel:${site.phone}`}>
                <Icon name="phone" size={13} />
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="utility-bar__email">
                <Icon name="mail" size={13} />
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Haly Group on Instagram"
              >
                <Icon name="instagram" size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container header-main__inner">
            <Link to="/" className="header-logo" aria-label="Haly Group Limited home">
              <Logo variant="white" priority />
            </Link>

            <nav className="desktop-nav" aria-label="Primary navigation">
              <ul>
                {nav.map((item) =>
                  item.label === 'Services' ? (
                    <li
                      key={item.to}
                      className={`nav-mega ${megaOpen ? 'is-open' : ''}`}
                      onMouseEnter={() => setMegaOpen(true)}
                      onMouseLeave={closeMega}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node)) closeMega()
                      }}
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `nav-link ${isActive ? 'is-active' : ''}`
                        }
                        aria-expanded={megaOpen}
                        onFocus={() => setMegaOpen(true)}
                      >
                        Services
                        <Icon name="chevron" size={14} />
                      </NavLink>

                      <div className="mega-menu" aria-hidden={!megaOpen} inert={!megaOpen}>
                        <div className="mega-menu__intro">
                          <span className="eyebrow">One group · Four service lines</span>
                          <p>Move people, goods and operations with one connected partner.</p>
                        </div>
                        <div className="mega-menu__grid">
                          {services.map((service) => (
                            <Link
                              to={`/services/${service.slug}`}
                              key={service.slug}
                              className="mega-card"
                              onClick={closeMega}
                              tabIndex={megaOpen ? 0 : -1}
                            >
                              <span className="mega-card__image">
                                <img src={service.image} alt="" loading="lazy" />
                              </span>
                              <span className="mega-card__content">
                                <span className="mega-card__index">{service.kicker.split('/')[0]}</span>
                                <strong>{service.navTitle}</strong>
                                <span>{service.summary}</span>
                                <Icon name="arrowUp" size={18} />
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mega-menu__foot">
                          <span>
                            <Icon name="phone" size={16} />
                            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
                          </span>
                          <Link to="/contact" onClick={closeMega}>
                            Start an enquiry <Icon name="arrow" size={17} />
                          </Link>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                          `nav-link ${isActive ? 'is-active' : ''}`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <div className="header-actions">
              <Link to="/contact" className="button button--gold header-cta">
                Request a quote
                <span className="button__icon">
                  <Icon name="arrowUp" size={17} />
                </span>
              </Link>
              <button
                ref={toggleRef}
                type="button"
                className="menu-toggle"
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMenuOpen(true)}
              >
                <span className="menu-toggle__label">Menu</span>
                <span className="menu-toggle__lines" aria-hidden="true">
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="mobile-menu__top">
          <Logo variant="white" />
          <button
            ref={closeRef}
            type="button"
            className="mobile-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <Icon name="close" size={26} />
          </button>
        </div>

        <div className="mobile-menu__body">
          <nav aria-label="Mobile navigation">
            <ul className="mobile-nav">
              <li>
                <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                  <span>01</span> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                  <span>02</span> About
                </NavLink>
              </li>
              <li className="mobile-nav__services">
                <button
                  type="button"
                  aria-expanded={mobileServices}
                  onClick={() => setMobileServices((open) => !open)}
                >
                  <span>03</span> Services
                  <Icon name={mobileServices ? 'minus' : 'plus'} size={20} />
                </button>
                <div className={`mobile-subnav ${mobileServices ? 'is-open' : ''}`}>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {service.navTitle}
                      <Icon name="arrowUp" size={16} />
                    </Link>
                  ))}
                </div>
              </li>
              <li>
                <NavLink to="/industries" onClick={() => setMenuOpen(false)}>
                  <span>04</span> Industries
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                  <span>05</span> Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu__foot">
            <span className="eyebrow">Dar es Salaam · Tanzania</span>
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <div className="mobile-menu__social">
              <a href={site.instagram} target="_blank" rel="noreferrer">
                <Icon name="instagram" size={18} /> Instagram
              </a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <span className="mobile-menu__wordmark" aria-hidden="true">
          HALY
        </span>
      </div>
    </>
  )
}
