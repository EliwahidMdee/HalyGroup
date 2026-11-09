import type { ReactNode } from 'react'
import type { IconName } from '../data/site'

type IconProps = {
  name: IconName
  size?: number
  className?: string
  label?: string
}

const paths: Partial<Record<IconName, ReactNode>> = {
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  arrowUp: <path d="M7 17 17 7M8 7h9v9" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  close: <path d="m5 5 14 14M19 5 5 19" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  check: <path d="m4 12 5 5L20 6" />,
  phone: (
    <path d="M8.2 3.5 5.6 4.9a2 2 0 0 0-1 2.2 17.2 17.2 0 0 0 12.3 12.3 2 2 0 0 0 2.2-1l1.4-2.6a1.4 1.4 0 0 0-.5-1.8l-3-1.7a1.4 1.4 0 0 0-1.7.3l-1.2 1.4a13.1 13.1 0 0 1-5.1-5.1l1.4-1.2a1.4 1.4 0 0 0 .3-1.7l-1.7-3a1.4 1.4 0 0 0-1.8-.5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  car: (
    <>
      <path d="m5 10 1.5-4.2A2 2 0 0 1 8.4 4h7.2a2 2 0 0 1 1.9 1.8L19 10" />
      <path d="M4 10h16a1 1 0 0 1 1 1v5h-2M3 16V11a1 1 0 0 1 1-1m0 6h2" />
      <path d="M6 16h12M6 16v2h2v-2m8 0v2h2v-2" />
      <path d="M7 13h2m6 0h2" />
    </>
  ),
  plane: <path d="m2.5 13.3 19-8.3-8.3 19-2.2-8.4-8.5-2.3Z" />,
  gps: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 4a8 8 0 0 1 8 8M12 20a8 8 0 0 1-8-8" />
      <path d="M12 1v3m0 16v3M1 12h3m16 0h3" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8" />
      <path d="M12 13v9" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" />
    </>
  ),
  camera: (
    <>
      <path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H14a3 3 0 0 0 3-3V8.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 20 6v6c0 5-4.5 7.5-8 9-3.5-1.5-8-4-8-9V6l8-3Z" />
      <path d="m8.5 12 2.3 2.3 4.7-5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.3a3 3 0 0 1 0 5.4M18 14c2 .8 3 2.6 3 5" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V4h9v17M14 9h5v12M3 21h18" />
      <path d="M8 7h3M8 11h3M8 15h3M17 13h-1m1 4h-1" />
    </>
  ),
  landmark: (
    <>
      <path d="m3 9 9-5 9 5H3ZM5 9v8m4-8v8m6-8v8m4-8v8M3 21h18" />
      <path d="M2 17h20" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18M10 12v2h4v-2" />
    </>
  ),
  spark: <path d="M12 2c.7 5.5 4.5 9.3 10 10-5.5.7-9.3 4.5-10 10-.7-5.5-4.5-9.3-10-10 5.5-.7 9.3-4.5 10-10Z" />,
  play: <path d="m9 6 9 6-9 6V6Z" />,
}

const solidPaths: Partial<Record<IconName, string>> = {
  whatsapp:
    'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z',
}

export function Icon({ name, size = 24, className, label }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className,
    role: label ? ('img' as const) : undefined,
    'aria-hidden': label ? undefined : true,
    'aria-label': label,
    focusable: 'false' as const,
  }

  if (name === 'instagram') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (solidPaths[name]) {
    return (
      <svg {...common} fill="currentColor">
        <path d={solidPaths[name]} />
      </svg>
    )
  }

  return (
    <svg
      {...common}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] ?? paths.arrow}
    </svg>
  )
}
