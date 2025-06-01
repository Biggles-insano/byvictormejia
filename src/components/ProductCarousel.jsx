import { Link } from 'react-router-dom'

export default function ProductCarousel({ title, products }) {
  return (
    <section style={{ margin: '2rem 0', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1rem' }}>{title}</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {products.map(product => (
          <Link
            key={product.id}
            to={`/producto/${product.id}`}
            style={{
              width: '200px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div>
              <img
                src={product.imagenes[0]}
                alt={product.nombre}
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <h3 style={{ marginTop: '0.5rem' }}>{product.nombre}</h3>
              <p>${product.precio.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}