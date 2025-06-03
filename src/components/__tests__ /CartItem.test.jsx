import { render, screen, fireEvent } from '@testing-library/react'
import CartItem from '../CartItem'
import { describe, test, expect, vi } from 'vitest'
import { CartContext } from '../../context/CartContext'

const mockItem = {
  id: 1,
  nombre: 'Zapatillas',
  precio: 99.99,
  imagenes: ['https://via.placeholder.com/150'],
  cantidad: 2,
  talla: 'M'
}

const wrapper = (ui) => {
  const mockCart = {
    incrementQuantity: vi.fn(),
    decrementQuantity: vi.fn(),
    removeFromCart: vi.fn()
  }
  return (
    <CartContext.Provider value={mockCart}>
      {ui}
    </CartContext.Provider>
  )
}

describe('CartItem', () => {
  test('renderiza los detalles del producto correctamente', () => {
    render(wrapper(<CartItem item={mockItem} />))
    expect(screen.getByText(/zapatillas/i)).toBeInTheDocument()
    expect(screen.getByText('$99.99')).toBeInTheDocument()
    expect(screen.getByText(/talla: m/i)).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  test('llama a incrementQuantity cuando se hace clic en +', () => {
    const mockFn = vi.fn()
    render(
      <CartContext.Provider value={{ incrementQuantity: mockFn, decrementQuantity: () => {}, removeFromCart: () => {} }}>
        <CartItem item={mockItem} />
      </CartContext.Provider>
    )
    fireEvent.click(screen.getByLabelText('+'))
    expect(mockFn).toHaveBeenCalled()
  })

  test('llama a decrementQuantity cuando se hace clic en -', () => {
    const mockFn = vi.fn()
    render(
      <CartContext.Provider value={{ incrementQuantity: () => {}, decrementQuantity: mockFn, removeFromCart: () => {} }}>
        <CartItem item={mockItem} />
      </CartContext.Provider>
    )
    fireEvent.click(screen.getByLabelText('-'))
    expect(mockFn).toHaveBeenCalled()
  })

  test('llama a removeFromCart cuando se hace clic en "Eliminar"', () => {
    const mockFn = vi.fn()
    render(
      <CartContext.Provider value={{ incrementQuantity: () => {}, decrementQuantity: () => {}, removeFromCart: mockFn }}>
        <CartItem item={mockItem} />
      </CartContext.Provider>
    )
    fireEvent.click(screen.getByText(/eliminar/i))
    expect(mockFn).toHaveBeenCalled()
  })
})