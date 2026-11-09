import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeaderProps = {
  kicker: string
  title: ReactNode
  intro?: ReactNode
  action?: ReactNode
  align?: 'split' | 'center'
  theme?: 'light' | 'dark'
}

export function SectionHeader({
  kicker,
  title,
  intro,
  action,
  align = 'split',
  theme = 'light',
}: SectionHeaderProps) {
  return (
    <div className={`section-head section-head--${align} section-head--${theme}`}>
      <Reveal className="section-head__title">
        <span className="eyebrow">
          <span className="eyebrow__line" />
          {kicker}
        </span>
        <h2>{title}</h2>
      </Reveal>
      {(intro || action) && (
        <Reveal className="section-head__aside" delay={120}>
          {intro && <div className="section-head__intro">{intro}</div>}
          {action}
        </Reveal>
      )}
    </div>
  )
}
