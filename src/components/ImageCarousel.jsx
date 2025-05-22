import { Link } from 'react-router-dom'

export default function ImageCarousel({ title, products }) {
  return (
    <section style={{ margin: '2rem 0' }}>
      <h2 style={{ marginLeft: '1rem' }}>{title}</h2>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', padding: '1rem' }}>
        {products.map(product => (
          <Link
            key={product.id}
            to={`/producto/${product.id}`}
            style={{ flex: '0 0 auto', cursor: 'pointer' }}
          >
            <img
              src={product.imagen}
              alt={product.nombre}
              style={{ width: '200px', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}