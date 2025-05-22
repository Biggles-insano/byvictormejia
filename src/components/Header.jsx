import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <a href="https://www.instagram.com/byvictormejia/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
        Instagram
      </a>
      <a href="https://www.tiktok.com/@tu_usuario" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
        TikTok
      </a>
      <Link to="/carrito">Carrito</Link>
    </nav>
  )
}