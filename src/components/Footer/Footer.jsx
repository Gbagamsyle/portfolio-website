import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">Ogaba Silas</div>
          <p>Building thoughtful digital products<br />for ambitious teams.</p>
        </div>
        <div className="footer-connect">
          <span className="footer-label">Find me online</span>
          <div className="footer-socials">
            <a href="https://github.com/Gbagamsyle" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/ogaba-silas-4172821b8/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="https://x.com/SilasOgaba" target="_blank" rel="noreferrer">X <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 Ogaba Silas. All rights reserved.</div>
        <a className="footer-top-link" href="#hero">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}
