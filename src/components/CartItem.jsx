import { useCart } from '../context/CartContext'

export default function CartItem({ item }) {
  const {
    incrementQuantity,
    decrementQuantity,
    removeFromCart
  } = useCart()

  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      borderBottom: '1px solid #ccc',
      alignItems: 'center'
    }}>
      <img
        src={item.imagen}
        alt={item.nombre}
        style={{ width: '100px', height: '120px', objectFit: 'cover' }}
      />

      <div style={{ flex: 1 }}>
        <h3>{item.nombre}</h3>
        <p><strong>Talla:</strong> {item.talla}</p>
        <p><strong>Precio:</strong> ${item.precio.toFixed(2)}</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
          <button onClick={() => decrementQuantity(item.key)}>-</button>
          <span>{item.cantidad}</span>
          <button onClick={() => incrementQuantity(item.key)}>+</button>
        </div>
      </div>

      <div>
        <p><strong>Subtotal:</strong></p>
        <p>${(item.precio * item.cantidad).toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.key)} style={{ marginTop: '0.5rem', color: 'red' }}>
          Eliminar
        </button>
      </div>
    </div>
  )
}