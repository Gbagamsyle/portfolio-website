import './Navbar.css'
import { navigation } from '../../data/siteData'

export default function Navbar() {
  return (
    <nav className="top-nav">
      <div className="nav-logo">OS</div>
      <ul className="nav-links">
        {navigation.map((item) => (
          <li key={item.href}><a href={item.href}>{item.label}</a></li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">Hire Me</a>
    </nav>
  )
}
