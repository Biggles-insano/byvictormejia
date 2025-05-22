import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/producto/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem', cursor: 'pointer', width: '150px' }}>
        <img src={product.imagen} alt={product.nombre} width="150" height="200" />
        <h3>{product.nombre}</h3>
        <p>${product.precio.toFixed(2)}</p>
      </div>
    </Link>
  )
}