import { clientLogos } from '../data/site'
import { Reveal } from './Reveal'

export function LogoWall() {
  return (
    <div className="logo-wall">
      {clientLogos.map((logo, index) => (
        <Reveal className="logo-wall__item" key={logo.src} delay={index * 45}>
          <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
        </Reveal>
      ))}
    </div>
  )
}
