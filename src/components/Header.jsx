import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav
      style={{
        padding: '1rem',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginRight: '2rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <img src="/logo.png" alt="Logo byvictormejia" style={{ height: 40, width: 'auto', cursor: 'pointer' }} />
        </Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a
          href="https://www.instagram.com/byvictormejia/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '1rem' }}
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '1rem' }}
        >
          TikTok
        </a>
        <Link to="/carrito">Carrito</Link>
      </div>
    </nav>
  )
}