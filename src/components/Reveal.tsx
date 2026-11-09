import { useLayoutEffect, useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'header' | 'figure' | 'li'
}

type RevealEntry = {
  element: HTMLElement
  reveal: () => void
}

const entries = new Set<RevealEntry>()
let frame = 0
let listening = false

function reveal(entry: RevealEntry) {
  if (entry.element.classList.contains('is-revealed')) return
  entry.element.classList.add('is-revealed')
  entries.delete(entry)
}

function updateReveals() {
  frame = 0
  const viewportHeight = window.innerHeight

  entries.forEach((entry) => {
    if (entry.element.getBoundingClientRect().top < viewportHeight * 0.94) {
      reveal(entry)
    }
  })

  if (!entries.size) stopListening()
}

function scheduleReveals() {
  if (frame) return
  frame = window.requestAnimationFrame(updateReveals)
}

function startListening() {
  if (listening) return
  listening = true
  window.addEventListener('scroll', scheduleReveals, { passive: true })
  window.addEventListener('resize', scheduleReveals, { passive: true })
}

function stopListening() {
  if (!listening) return
  listening = false
  window.removeEventListener('scroll', scheduleReveals)
  window.removeEventListener('resize', scheduleReveals)

  if (frame) {
    window.cancelAnimationFrame(frame)
    frame = 0
  }
}

function register(element: HTMLElement) {
  const entry = { element, reveal: () => reveal(entry) }
  entries.add(entry)
  startListening()
  scheduleReveals()

  return () => {
    entries.delete(entry)
    if (!entries.size) stopListening()
  }
}

export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('is-revealed')
      return
    }

    element.classList.add('will-reveal')
    return register(element)
  }, [])

  const Element = as

  return (
    <Element
      ref={ref as never}
      className={`reveal ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Element>
  )
}
