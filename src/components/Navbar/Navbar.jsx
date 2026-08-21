import './Navbar.css'
import { navigation } from '../../data/siteData'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`top-nav ${menuOpen ? 'menu-open' : ''}`}>
      <a className="nav-brand" href="#hero" aria-label="Ogaba Silas home">
        <span className="nav-logo">OS</span>
        <span className="nav-brand-name">Ogaba Silas</span>
      </a>
      <ul className="nav-links" aria-label="Primary navigation">
        {navigation.map((item) => (
          <li key={item.href}><a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a></li>
        ))}
      </ul>
      <div className="nav-actions">
        <span className="nav-availability"><span /> Available</span>
        <a href="#contact" className="nav-cta">Hire Me</a>
      </div>
      <button
        className="nav-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
    </nav>
  )
}
