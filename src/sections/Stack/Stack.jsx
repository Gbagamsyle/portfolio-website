import './Stack.css'
import { stackItems } from '../../data/siteData'

export default function Stack() {
  return (
    <section id="stack" className="stack-section">
      <div className="stack-inner">
        <div className="stack-head reveal">
          <div>
            <div className="section-label">Tech Stack</div>
            <h2 className="section-title">A toolkit built for momentum</h2>
          </div>
          <p className="section-sub">I choose technology for the problem in front of us, balancing speed today with a foundation that can keep up tomorrow.</p>
        </div>

        <div className="stack-grid">
          {stackItems.map((item, index) => (
            <div className="stack-item reveal" key={item.name + index}>
              <span className="stack-index">{String(index + 1).padStart(2, '0')}</span>
              <span className={`stack-icon ${item.mark ? 'stack-icon-mark' : ''} ${item.name === 'Node.js' ? 'stack-icon-node' : ''}`} aria-hidden="true">{item.mark || item.icon}</span>
              <div className="stack-copy">
                <div className="stack-name">{item.name}</div>
                <div className="stack-cat">{item.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
