import './Cursor.css'

export default function Cursor({ cursorRef, ringRef }) {
  return (
    <>
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
