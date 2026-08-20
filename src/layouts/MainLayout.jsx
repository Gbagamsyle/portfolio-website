import Navbar from '../components/Navbar/Navbar'
import Cursor from '../components/Cursor/Cursor'
import Footer from '../components/Footer/Footer'

export default function MainLayout({ children, cursorRef, ringRef }) {
  return (
    <>
      <Cursor cursorRef={cursorRef} ringRef={ringRef} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
