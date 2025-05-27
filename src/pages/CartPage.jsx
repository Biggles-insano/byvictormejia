import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'

export default function CartPage() {
  const {
    cart,
    clearCart,
    total,
    error
  } = useCart()

  const handlePurchase = () => {
    alert("¡Gracias por tu compra!")
    clearCart()
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Carrito de compras</h1>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {/* Lista de productos */}
          {cart.map(item => (
            <CartItem key={item.key} item={item} />
          ))}

          {/* Totales */}
          <div style={{
            marginTop: '2rem',
            paddingTop: '1rem',
            borderTop: '1px solid #ccc',
            textAlign: 'right'
          }}>
            <p><strong>Total:</strong> ${total.toFixed(2)}</p>
            {error && (
              <p style={{ color: 'red', fontWeight: 'bold' }}>
                ERROR: El total excede $999.99
              </p>
            )}
            <button onClick={clearCart} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
              Vaciar carrito
            </button>
            <button onClick={handlePurchase} style={{ marginLeft: '1rem', padding: '0.5rem 1rem', backgroundColor: 'black', color: 'white' }}>
              Comprar
            </button>
          </div>
        </>
      )}
    </div>
  )
}