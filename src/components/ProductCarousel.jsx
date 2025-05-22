import { Link } from 'react-router-dom'

export default function ProductCarousel({ title, products }) {
  return (
    <section style={{ margin: '2rem 0' }}>
      <h2 style={{ marginLeft: '1rem' }}>{title}</h2>
      <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', padding: '1rem' }}>
        {products.map(product => (
          <Link
            key={product.id}
            to={`/producto/${product.id}`}
            style={{ flex: '0 0 auto', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ width: '150px' }}>
              <img
                src={product.imagen}
                alt={product.nombre}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <h3>{product.nombre}</h3>
              <p>${product.precio.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}