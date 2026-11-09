const items = [
  'Transport & Car Hire',
  'Travel Management',
  'Smart Tracking',
  'Light Cargo',
  'Courier Services',
  'Corporate Mobility',
  'Ground Transfers',
]

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <span className="marquee__mark">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
