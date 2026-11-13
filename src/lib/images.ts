type ImageVariant = { width: number; src: string }

// Responsive variants generated from the original artwork. Images without an
// entry here are already small enough to serve at their native size.
const variants: Record<string, ImageVariant[]> = {
  '/media/hero/hero-mobility.webp': [
    { width: 800, src: '/media/hero/hero-mobility-800.webp' },
    { width: 1200, src: '/media/hero/hero-mobility-1200.webp' },
    { width: 1500, src: '/media/hero/hero-mobility.webp' },
  ],
  '/media/hero/hero-tanzania.webp': [
    { width: 800, src: '/media/hero/hero-tanzania-800.webp' },
    { width: 1200, src: '/media/hero/hero-tanzania-1200.webp' },
    { width: 1600, src: '/media/hero/hero-tanzania-1600.webp' },
    { width: 2000, src: '/media/hero/hero-tanzania.webp' },
  ],
  '/media/hero/hero-city.webp': [
    { width: 800, src: '/media/hero/hero-city-800.webp' },
    { width: 1200, src: '/media/hero/hero-city-1200.webp' },
    { width: 1500, src: '/media/hero/hero-city.webp' },
  ],
  '/media/services/tracking-feature.webp': [
    { width: 800, src: '/media/services/tracking-feature-800.webp' },
    { width: 1400, src: '/media/services/tracking-feature.webp' },
  ],
  '/media/services/logistics-cargo.webp': [
    { width: 800, src: '/media/services/logistics-cargo-800.webp' },
    { width: 1200, src: '/media/services/logistics-cargo-1200.webp' },
    { width: 1600, src: '/media/services/logistics-cargo.webp' },
  ],
  '/media/services/logistics-cargo-care.webp': [
    { width: 800, src: '/media/services/logistics-cargo-care-800.webp' },
    { width: 1200, src: '/media/services/logistics-cargo-care.webp' },
  ],
  '/media/services/travel-hotel.webp': [
    { width: 1000, src: '/media/services/travel-hotel-1000.webp' },
    { width: 1600, src: '/media/services/travel-hotel.webp' },
  ],
  '/media/services/tracking-illustration.webp': [
    { width: 800, src: '/media/services/tracking-illustration-800.webp' },
    { width: 1600, src: '/media/services/tracking-illustration.webp' },
  ],
  '/media/services/travel-destination.webp': [
    { width: 600, src: '/media/services/travel-destination-600.webp' },
    { width: 800, src: '/media/services/travel-destination-800.webp' },
    { width: 1000, src: '/media/services/travel-destination-1000.webp' },
    { width: 1200, src: '/media/services/travel-destination-1200.webp' },
    { width: 1600, src: '/media/services/travel-destination.webp' },
  ],
  '/media/services/travel-agency.webp': [
    { width: 800, src: '/media/services/travel-agency-800.webp' },
    { width: 1400, src: '/media/services/travel-agency.webp' },
  ],
  '/media/services/transport-selfdrive.webp': [
    { width: 1000, src: '/media/services/transport-selfdrive-1000.webp' },
    { width: 1200, src: '/media/services/transport-selfdrive.webp' },
  ],
  '/media/services/transport-staff.webp': [
    { width: 600, src: '/media/services/transport-staff-600.webp' },
    { width: 800, src: '/media/services/transport-staff-800.webp' },
    { width: 1000, src: '/media/services/transport-staff-1000.webp' },
    { width: 1400, src: '/media/services/transport-staff.webp' },
  ],
  '/media/services/transport-city.webp': [
    { width: 1000, src: '/media/services/transport-city-1000.webp' },
    { width: 1200, src: '/media/services/transport-city.webp' },
  ],
  '/media/services/transport-airport.webp': [
    { width: 800, src: '/media/services/transport-airport-800.webp' },
    { width: 1200, src: '/media/services/transport-airport.webp' },
  ],
}

export function getImageSrcSet(src: string): string | undefined {
  const list = variants[src]
  if (!list) return undefined
  return list.map(({ width, src: variantSrc }) => `${variantSrc} ${width}w`).join(', ')
}
