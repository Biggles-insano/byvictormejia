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
        {products.map(product => {
          const imageUrl = product.imagenes?.[0] || product.imagen || ''

          return (
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
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={product.nombre}
                    style={{
                      width: '100%',
                      height: '240px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '240px',
                    borderRadius: '8px',
                    backgroundColor: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#888',
                    fontSize: '0.9rem'
                  }}>
                    Imagen no disponible
                  </div>
                )}
                <h3 style={{ marginTop: '0.5rem' }}>{product.nombre}</h3>
                <p>${product.precio.toFixed(2)}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}