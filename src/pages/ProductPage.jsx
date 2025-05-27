import { useParams } from 'react-router-dom'
import { useState } from 'react'
import products from '../data/products'
import { useCart } from '../context/CartContext'
import StarRating from '../components/StarRating'

function DiscountLabel({ precio, precioAntes, descuento }) {
  if (descuento) {
    return (
      <p>
        <span style={{ textDecoration: 'line-through', marginRight: '0.5rem', color: '#888' }}>
          ${precioAntes.toFixed(2)}
        </span>
        <strong>${precio.toFixed(2)}</strong>
      </p>
    )
  }
  return <p><strong>${precio.toFixed(2)}</strong></p>
}

export default function ProductPage() {
  const { id } = useParams()
  const productId = parseInt(id)
  const product = products.find(p => p.id === productId)
  const { addToCart } = useCart()
  const [talla, setTalla] = useState('')
  const [userRating, setUserRating] = useState(product ? product.rating : 0)

  if (!product) {
    return <h2 style={{ padding: '2rem' }}>Producto no encontrado</h2>
  }

  const handleAddToCart = () => {
    if (!talla) {
      alert('Por favor selecciona una talla')
      return
    }
    addToCart(product, talla)
    alert('Producto agregado al carrito')
  }

  return (
    <div style={{ display: 'flex', padding: '2rem', gap: '2rem' }}>
      {/* Imagen del producto */}
      <div>
        <img
          src={product.imagen}
          alt={product.nombre}
          style={{ width: '400px', height: '500px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', gap: '0.5rem' }}>
          <span>⚫</span>
          <span>⚪</span>
          <span>⚪</span>
        </div>
      </div>

      {/* Información del producto */}
      <div style={{ maxWidth: '400px' }}>
        <h1>{product.nombre}</h1>
        <StarRating initialRating={userRating} onChange={setUserRating} />
        <DiscountLabel precio={product.precio} precioAntes={product.precioAntes} descuento={product.descuento} />

        <label htmlFor="talla">Talla:</label>
        <select
          id="talla"
          name="talla"
          value={talla}
          onChange={(e) => setTalla(e.target.value)}
          style={{ display: 'block', margin: '1rem 0', padding: '0.5rem' }}
        >
          <option value="">Selecciona la talla</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <button
          onClick={handleAddToCart}
          style={{ padding: '0.75rem 1.5rem', background: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          AÑADIR AL CARRITO
        </button>
      </div>
    </div>
  )
}