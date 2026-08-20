import './Stack.css'
import { stackItems } from '../../data/siteData'

export default function Stack() {
  return (
    <section id="stack" className="stack-section">
      <div className="stack-inner">
        <div className="stack-head reveal">
          <div>
            <div className="section-label">Tech Stack</div>
            <h2 className="section-title">Tools of the Trade</h2>
          </div>
          <p className="section-sub">I'm deliberate about my stack. Every tool I use has earned its place through real projects.</p>
        </div>

        <div className="stack-grid">
          {stackItems.map((item, index) => (
            <div className="stack-item reveal" key={item.name + index}>
              <span className="stack-icon">{item.icon}</span>
              <div className="stack-name">{item.name}</div>
              <div className="stack-cat">{item.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
