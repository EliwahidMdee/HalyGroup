import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const INTRO_KEY = 'haly-intro-seen'

export function Preloader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !window.sessionStorage.getItem(INTRO_KEY)
  })
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!visible) return

    document.body.classList.add('intro-active')
    const leaveTimer = window.setTimeout(() => setLeaving(true), 850)
    const hideTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(INTRO_KEY, 'true')
      setVisible(false)
      document.body.classList.remove('intro-active')
    }, 1350)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(hideTimer)
      document.body.classList.remove('intro-active')
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className={`preloader ${leaving ? 'is-leaving' : ''}`}
      role="status"
      aria-label="Loading Haly Group Limited"
    >
      <div className="preloader__grid" aria-hidden="true" />
      <div className="preloader__top">
        <span>Haly Group Limited</span>
        <span>Dar es Salaam · Tanzania</span>
      </div>

      <div className="preloader__center">
        <div className="preloader__logo-wrap">
          <Logo variant="white" className="preloader__logo" priority />
        </div>
        <div className="preloader__track" aria-hidden="true">
          <span />
        </div>
      </div>

      <div className="preloader__bottom">
        <span>Travel · Mobility · Light Cargo</span>
        <span>Imagine it, we&apos;ll do it.</span>
      </div>
    </div>
  )
}
