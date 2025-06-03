import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ProductCard from '../ProductCard'
import { describe, test, expect, vi } from 'vitest'
import '@testing-library/jest-dom'

const mockProduct = {
  id: 1,
  nombre: 'Cartera de cuero',
  precio: 199.99,
  precioAntes: 250.00,
  descuento: true,
  imagenes: ['https://via.placeholder.com/150'],
  rating: 4
}

describe('ProductCard', () => {
  test('renderiza correctamente el nombre, imagen y precio', () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    )
    expect(screen.getByText(/cartera de cuero/i)).toBeInTheDocument()
    expect(screen.getByText('$199.99')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})