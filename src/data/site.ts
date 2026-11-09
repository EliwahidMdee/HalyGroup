export type IconName =
  | 'arrow'
  | 'arrowUp'
  | 'briefcase'
  | 'building'
  | 'box'
  | 'camera'
  | 'car'
  | 'check'
  | 'chevron'
  | 'clock'
  | 'compass'
  | 'globe'
  | 'gps'
  | 'landmark'
  | 'lock'
  | 'mail'
  | 'menu'
  | 'phone'
  | 'pin'
  | 'plane'
  | 'play'
  | 'route'
  | 'shield'
  | 'spark'
  | 'users'
  | 'whatsapp'
  | 'instagram'
  | 'close'
  | 'plus'
  | 'minus'

export type Service = {
  slug: string
  title: string
  navTitle: string
  kicker: string
  summary: string
  description: string
  image: string
  heroImage: string
  imageAlt: string
  offerings: { title: string; description: string }[]
  idealFor: string[]
  note: string
  feature?: {
    kicker: string
    title: string
    body: string
    points: string[]
    image: string
    imageAlt: string
    theme: 'dark' | 'light'
  }
}

export const site = {
  name: 'Haly Group Limited',
  shortName: 'Haly Group',
  tagline: "Imagine it, we'll do it.",
  positioning: 'Travel. Mobility. Light Cargo / Logistics.',
  description:
    'A diversified Tanzanian service company providing integrated solutions across transportation, travel management, smart mobility, and light cargo & courier services.',
  phone: '+255774541541',
  phoneDisplay: '+255 774 541 541',
  whatsapp: 'https://wa.me/255663583011',
  email: 'office@halygroupltd.com',
  instagram: 'https://www.instagram.com/halygroupltd/',
  address: {
    line1: '16th Floor, PSSSF Millenium Towers Phase II',
    line2: 'Plot No. 11 & 12, New Bagamoyo Road, Kijitonyama',
    line3: 'P.O. Box 34504, Dar es Salaam, Tanzania',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=PSSSF+Millenium+Towers+Phase+II+Dar+es+Salaam',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
]

export const services: Service[] = [
  {
    slug: 'transport',
    title: 'Transport & Car Hire',
    navTitle: 'Transport & Car Hire',
    kicker: '01 / Mobility',
    summary: 'Reliable ground transportation for corporate, government and private travel.',
    description:
      'Haly Group Limited provides reliable and flexible ground transportation solutions tailored to corporate organisations, government institutions and private clients. Through car hire and rental services, corporate transportation and ground transfer arrangements, we support convenient, comfortable and efficient mobility for every journey.',
    image: '/media/services/transport-chauffeur.webp',
    heroImage: '/media/services/transport-chauffeur.webp',
    imageAlt: 'Chauffeur-driven car hire service by Haly Group',
    offerings: [
      {
        title: 'Car Hire & Rentals',
        description:
          'Reliable vehicle rental solutions offering convenience and flexibility for business and personal travel needs.',
      },
      {
        title: 'Corporate Transportation',
        description:
          'Professional transportation designed to support employee mobility, executive travel and corporate operations.',
      },
      {
        title: 'Ground Transfers',
        description:
          'Convenient, dependable transfers to and from airports, hotels, offices and other destinations.',
      },
      {
        title: 'Flexible Transport Solutions',
        description:
          'Customisable transportation arrangements shaped around different schedules, client requirements and operational needs.',
      },
    ],
    idealFor: [
      'Corporate & multinational companies',
      'Government & NGOs',
      'Travel & tourism',
      'Events & hospitality',
      'Individual travellers',
    ],
    note: 'Vehicle type, duration, route and inclusions are confirmed for each assignment before booking.',
    feature: {
      kicker: 'A better way to move',
      title: 'The right vehicle. The right plan.',
      body: 'From a single airport transfer to ongoing corporate mobility, we coordinate the details around your schedule. Choose a chauffeur-driven arrangement or a self-drive rental, and we will help shape the rest.',
      points: ['Airport & hotel transfers', 'Self-drive options', 'Corporate staff transportation'],
      image: '/media/services/transport-selfdrive.webp',
      imageAlt: 'Self-drive rental vehicle from Haly Group',
      theme: 'light',
    },
  },
  {
    slug: 'travel',
    title: 'Travel Agency Services',
    navTitle: 'Travel Agency',
    kicker: '02 / Travel',
    summary: 'Travel planning and management built around convenience, compliance and cost efficiency.',
    description:
      'Haly Group Limited provides comprehensive travel planning and management designed around convenience, compliance and cost efficiency. From flights and accommodation to documentation and ground arrangements, we help individuals and organisations travel with greater ease.',
    image: '/media/services/travel-planning.webp',
    heroImage: '/media/services/transport-airport.webp',
    imageAlt: 'Travel planning and airport transfer services',
    offerings: [
      {
        title: 'Domestic & International Flights',
        description: 'Flight booking support for domestic and international journeys.',
      },
      {
        title: 'Hotel Reservations',
        description: 'Accommodation arrangements matched to the purpose and pace of your trip.',
      },
      {
        title: 'Visa Assistance & Documentation',
        description: 'Support with visa requirements and the travel documentation needed for your journey.',
      },
      {
        title: 'Travel Insurance Facilitation',
        description: 'Help arranging appropriate travel insurance cover for added peace of mind.',
      },
      {
        title: 'Leisure Travel Planning',
        description: 'Thoughtful planning for personal trips, getaways and time away.',
      },
      {
        title: 'Corporate Travel',
        description: 'Travel coordination designed for the demands of business schedules and teams.',
      },
      {
        title: 'City & Intercity Transfers',
        description: 'Ground connections that join the dots between airports, hotels, meetings and destinations.',
      },
    ],
    idealFor: [
      'Corporate & multinational companies',
      'Government & NGOs',
      'Financial institutions',
      'Travel & tourism',
      'Individual travellers',
    ],
    note: 'Flight, hotel and documentation requirements are subject to availability, supplier terms and applicable travel regulations.',
    feature: {
      kicker: 'One journey, joined up',
      title: 'From the first booking to the final transfer.',
      body: 'Travel works best when the pieces connect. Bring your flights, accommodation, documentation and ground movement into one conversation, and let our team help coordinate the journey from start to finish.',
      points: ['Flights & accommodation', 'Visa & travel documentation', 'Airport & city transfers'],
      image: '/media/services/travel-destination.webp',
      imageAlt: 'Coastal destination imagery representing travel planning',
      theme: 'dark',
    },
  },
  {
    slug: 'tracking',
    title: 'Smart Tracking Solutions',
    navTitle: 'Smart Tracking',
    kicker: '03 / Technology',
    summary: 'Technology-enabled visibility, security and control for your fleet.',
    description:
      'Our smart tracking solutions are designed to improve fleet visibility, security and operational control. Technology-enabled services help organisations see more of their operations and make better-informed decisions about the movement of their vehicles and assets.',
    image: '/media/services/tracking-gps.webp',
    heroImage: '/media/services/tracking-gps.webp',
    imageAlt: 'Smart GPS tracking service from Haly Group',
    offerings: [
      {
        title: 'GPS Tracking',
        description: 'Location visibility designed to support everyday fleet oversight.',
      },
      {
        title: 'AI-Powered Dash Cameras',
        description: 'In-vehicle camera technology that supports visibility on the road.',
      },
      {
        title: 'Smart Container Locking',
        description: 'Technology-enabled locking designed to support the security of container movements.',
      },
      {
        title: 'Fleet Monitoring Solutions',
        description: 'Monitoring capabilities shaped around the operational needs of a fleet.',
      },
    ],
    idealFor: [
      'Fleet owners & operators',
      'Logistics & e-commerce',
      'Corporate & multinational companies',
      'Government & NGOs',
      'SMEs',
    ],
    note: 'Solution scope, hardware and monitoring arrangements are defined around your fleet and operating requirements.',
    feature: {
      kicker: 'Operational clarity',
      title: 'See more. React sooner. Operate better.',
      body: 'Tracking is more than a dot on a map. It is the ability to understand where assets are, how they are being used and where attention may be needed. Our solutions bring location, camera and container technologies into a clearer operational picture.',
      points: ['GPS location visibility', 'AI-powered dash cameras', 'Smart container locking'],
      image: '/media/services/tracking-dashboard.webp',
      imageAlt: 'Vehicle dashboard and navigation technology',
      theme: 'dark',
    },
  },
  {
    slug: 'logistics',
    title: 'Light Cargo & Logistics',
    navTitle: 'Light Cargo & Courier',
    kicker: '04 / Logistics',
    summary: 'Secure, time-efficient movement of documents, parcels and light commercial cargo.',
    description:
      'Haly Group provides dependable light cargo and courier solutions designed to simplify the movement of documents, parcels and commercial goods. Through efficient coordination, flexible delivery options and a commitment to reliability, we help individuals and businesses move their items safely and conveniently across urban and intercity destinations.',
    image: '/media/services/logistics-documents.webp',
    heroImage: '/media/services/logistics-documents.webp',
    imageAlt: 'Document and parcel transportation service from Haly Group',
    offerings: [
      {
        title: 'Same-Day & Scheduled Deliveries',
        description:
          'Flexible delivery services designed to meet urgent deadlines and planned schedules.',
      },
      {
        title: 'Document & Parcel Transportation',
        description:
          'Transportation of important documents, packages and personal consignments with a focus on reliability.',
      },
      {
        title: 'B2B Delivery Services',
        description:
          'Business-to-business delivery support for daily operations and the movement of goods between companies and clients.',
      },
      {
        title: 'Small Commercial Cargo',
        description:
          'Practical transportation for small commercial shipments, products, supplies and lightweight goods.',
      },
      {
        title: 'Contracted Courier Services',
        description:
          'Ongoing courier arrangements shaped around the rhythm of your business.',
      },
    ],
    idealFor: [
      'Logistics & e-commerce',
      'Corporate & multinational companies',
      'Financial institutions',
      'SMEs',
      'Individual senders',
    ],
    note: 'Collection and delivery windows, item suitability and route coverage are confirmed before dispatch.',
    feature: {
      kicker: 'Handled with care',
      title: 'The last mile, without the loose ends.',
      body: 'Every consignment carries something that matters. Our light cargo and courier service brings coordination, flexibility and care to the movement of documents, parcels and small commercial cargo.',
      points: ['Same-day & scheduled options', 'B2B delivery support', 'Contracted courier arrangements'],
      image: '/media/services/logistics-cargo.webp',
      imageAlt: 'Light commercial cargo prepared for transportation',
      theme: 'light',
    },
  },
]

export const values = [
  {
    title: 'Trust & Integrity',
    description: 'We honour commitments and operate transparently.',
  },
  {
    title: 'Customer-Centric Execution',
    description: 'We design our services around the needs of our clients.',
  },
  {
    title: 'Operational Excellence',
    description: 'We prioritise safety, efficiency and consistency.',
  },
  {
    title: 'Growth & Innovation',
    description: 'We continuously improve and expand our solutions.',
  },
  {
    title: 'People & Partnerships',
    description: 'We believe in strong teams and long-term relationships.',
  },
]

export const differentiators = [
  {
    icon: 'spark' as IconName,
    title: 'Multi-service convenience',
    description: 'Mobility, travel, tracking and logistics under one trusted brand.',
  },
  {
    icon: 'shield' as IconName,
    title: 'Corporate standards',
    description: 'Professional systems and service standards designed for institutional clients.',
  },
  {
    icon: 'gps' as IconName,
    title: 'Technology-driven',
    description: 'Technology-enabled services designed to improve efficiency, visibility and security.',
  },
  {
    icon: 'route' as IconName,
    title: 'Flexible solutions',
    description: 'Services and contracts can be tailored to individual client requirements.',
  },
  {
    icon: 'pin' as IconName,
    title: 'Local expertise',
    description: 'A strong understanding of the Tanzanian market with a regional outlook.',
  },
  {
    icon: 'users' as IconName,
    title: 'Scalable operations',
    description: 'Solutions designed to grow alongside the needs of our clients.',
  },
]

export const industries = [
  {
    icon: 'building' as IconName,
    title: 'Corporate & Multinational Companies',
    description:
      'Staff mobility, executive travel, travel coordination and courier support for everyday operations.',
  },
  {
    icon: 'landmark' as IconName,
    title: 'Government & NGOs',
    description:
      'Coordinated ground transport and travel arrangements for teams, visits and programme activity.',
  },
  {
    icon: 'compass' as IconName,
    title: 'Travel & Tourism',
    description:
      'Airport transfers, city movement, travel planning and intercity connections for guests and groups.',
  },
  {
    icon: 'briefcase' as IconName,
    title: 'Financial Institutions',
    description:
      'Scheduled movement of documents and time-sensitive items, supported by professional coordination.',
  },
  {
    icon: 'box' as IconName,
    title: 'Logistics & E-commerce',
    description:
      'B2B deliveries, light commercial cargo and courier support for the movement of goods.',
  },
  {
    icon: 'spark' as IconName,
    title: 'Events & Hospitality',
    description:
      'Group transfers, guest movement and ground coordination for meetings, events and visits.',
  },
  {
    icon: 'users' as IconName,
    title: 'SMEs & Fleet Owners',
    description:
      'Flexible vehicle rental and technology-enabled fleet visibility for growing operations.',
  },
  {
    icon: 'car' as IconName,
    title: 'Individual Vehicle Owners',
    description:
      'Car hire, chauffeur arrangements and tracking solutions for personal mobility needs.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Tell us what moves',
    description: 'Share the people, parcel or operation you need to move, and the timeline you are working to.',
  },
  {
    number: '02',
    title: 'We shape the plan',
    description: 'We match the right service, vehicle or technology to the requirement and confirm the scope.',
  },
  {
    number: '03',
    title: 'We coordinate the details',
    description: 'From schedules and suppliers to ground arrangements, the moving parts are brought together.',
  },
  {
    number: '04',
    title: 'We stay accountable',
    description: 'Clear communication and follow-through keep you informed from first call to final mile.',
  },
]

export const clientLogos = [
  { src: '/media/clients/client-26.webp', alt: 'Haly Group client logo' },
  { src: '/media/clients/client-27.webp', alt: 'Haly Group client logo' },
  { src: '/media/clients/client-28.webp', alt: 'Haly Group client logo' },
  { src: '/media/clients/client-29.webp', alt: 'Haly Group client logo' },
  { src: '/media/clients/client-30.webp', alt: 'Haly Group client logo' },
  { src: '/media/clients/client-31.webp', alt: 'Haly Group client logo' },
  { src: '/media/clients/client-32.webp', alt: 'Haly Group client logo' },
  { src: '/media/clients/client-33.webp', alt: 'Haly Group client logo' },
]

export const faqs = [
  {
    question: 'Do you work with individual clients as well as organisations?',
    answer:
      'Yes. Haly Group works with corporates, government institutions, NGOs, SMEs, fleet owners and individuals across its service lines.',
  },
  {
    question: 'Can I request a one-off service?',
    answer:
      'Yes. A single transfer, rental, travel booking or delivery can be discussed with our team. We also support repeat and contracted requirements.',
  },
  {
    question: 'Can services be tailored to our organisation?',
    answer:
      'Yes. Service arrangements can be shaped around individual client requirements, schedules and operating needs.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'Send your requirement through the enquiry form, call +255 774 541 541 or email office@halygroupltd.com. Include your dates, location and the service you need so the team can respond with the right questions.',
  },
  {
    question: 'Are transport and courier services available outside Dar es Salaam?',
    answer:
      'Our base is in Dar es Salaam. Intercity routes and destinations can be discussed with our team and confirmed per assignment.',
  },
]

export const serviceOptions = [
  'Transport & Car Hire',
  'Travel Agency',
  'Smart Tracking',
  'Light Cargo & Logistics',
  'General enquiry',
]

export const findService = (slug: string) => services.find((service) => service.slug === slug)
