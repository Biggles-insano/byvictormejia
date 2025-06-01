import { Link } from 'react-router-dom'
import { FaInstagram, FaTiktok, FaShoppingCart } from 'react-icons/fa'

export default function Header() {
  return (
    <nav
      style={{
        padding: '0.25rem 2rem',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'Libre Baskerville, serif',
        flexWrap: 'wrap',
        backgroundColor: '#1c2a4d',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ flex: '1 1 auto', display: 'flex', alignItems: 'center' }}>
        <Link
          to="/"
          style={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            marginRight: '2rem',
            textDecoration: 'none',
            color: '#1a1a1a',
          }}
        >
          <img
            src="/images/logo.png"
            alt="Logo byvictormejia"
            style={{ height: 35, width: 'auto', cursor: 'pointer' }}
          />
        </Link>
      </div>
      <div
        style={{
          flex: '1 1 auto',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="https://www.instagram.com/byvictormejia/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ffffff', fontSize: '1.5rem' }}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ffffff', fontSize: '1.5rem' }}
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
        <Link
          to="/carrito"
          style={{ color: '#ffffff', fontSize: '1.5rem' }}
          aria-label="Carrito"
        >
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  )
}