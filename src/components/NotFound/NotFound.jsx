import './NotFound.css'

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found-orbit not-found-orbit--one" aria-hidden="true" />
      <div className="not-found-orbit not-found-orbit--two" aria-hidden="true" />
      <div className="not-found-content">
        <p className="not-found-kicker"><span /> Lost in the digital universe</p>
        <p className="not-found-code" aria-hidden="true">4<span>0</span>4</p>
        <h1 id="not-found-title">This page took a wrong turn.</h1>
        <p className="not-found-copy">
          The link may be outdated, or the page may have moved. Let’s get you back to something useful.
        </p>
        <div className="not-found-actions">
          <a className="btn-primary" href="/">Back to homepage <span aria-hidden="true">↗</span></a>
          <a className="btn-secondary" href="/#work">Explore selected work</a>
        </div>
        <p className="not-found-footnote">Ogaba Silas <span>·</span> Web Developer</p>
      </div>
      <div className="not-found-coordinate" aria-hidden="true">PAGE NOT FOUND&nbsp; / &nbsp;404</div>
    </section>
  )
}
