type LogoProps = {
  variant?: 'white' | 'navy' | 'white-solid'
  className?: string
  priority?: boolean
}

const sources = {
  white: '/media/brand/haly-logo-white.webp',
  navy: '/media/brand/haly-logo-navy.webp',
  'white-solid': '/media/brand/haly-logo-white-solid.webp',
}

export function Logo({ variant = 'white', className = '', priority = false }: LogoProps) {
  return (
    <img
      src={sources[variant]}
      alt="Haly Group Limited"
      className={className}
      width="1800"
      height="409"
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  )
}
