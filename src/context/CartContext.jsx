import { createContext, useContext, useState, useMemo } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  // Añadir producto al carrito
  const addToCart = (product, talla) => {
    const key = `${product.id}-${talla}`
    const existing = cart.find(item => item.key === key)

    if (existing) {
      if (existing.cantidad < 9) {
        setCart(cart.map(item =>
          item.key === key ? { ...item, cantidad: item.cantidad + 1 } : item
        ))
      }
    } else {
      setCart([
        ...cart,
        {
          key,
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          talla,
          cantidad: 1,
          imagen: product.imagen
        }
      ])
    }
  }

  const removeFromCart = (key) => {
    setCart(cart.filter(item => item.key !== key))
  }

  const incrementQuantity = (key) => {
    setCart(cart.map(item =>
      item.key === key && item.cantidad < 9
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    ))
  }

  const decrementQuantity = (key) => {
    setCart(cart.map(item =>
      item.key === key && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    ))
  }

  const clearCart = () => setCart([])

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0)
  }, [cart])

  const error = total > 999.99

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      clearCart,
      total,
      error
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}