import './Marquee.css'

const items = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Tailwind CSS',
  'PostgreSQL',
  'GraphQL',
  'Docker',
  'MongoDB',
  'AWS',
]

export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-label="Technology stack marquee">
      <div className="marquee-inner">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
