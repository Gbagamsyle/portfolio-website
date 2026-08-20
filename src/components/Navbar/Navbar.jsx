import './Navbar.css'
import { navigation } from '../../data/siteData'

export default function Navbar() {
  return (
    <nav className="top-nav">
      <a className="nav-brand" href="#hero" aria-label="Ogaba Silas home">
        <span className="nav-logo">OS</span>
        <span className="nav-brand-name">Ogaba Silas</span>
      </a>
      <ul className="nav-links">
        {navigation.map((item) => (
          <li key={item.href}><a href={item.href}>{item.label}</a></li>
        ))}
      </ul>
      <div className="nav-actions">
        <span className="nav-availability"><span /> Available</span>
        <a href="#contact" className="nav-cta">Hire Me</a>
      </div>
    </nav>
  )
}
