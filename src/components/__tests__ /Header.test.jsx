import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'
import { describe, test, expect, vi } from 'vitest'
import '@testing-library/jest-dom'

describe('Header', () => {
  test('muestra los íconos y el logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/tiktok/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/carrito/i)).toBeInTheDocument()
  })
})