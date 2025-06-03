import ProductCard from './ProductCard'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ padding: '2rem', background: '#f3e8dd' }}>
          <Story />
        </div>
      </BrowserRouter>
    )
  ]
}

const sampleProduct = {
  id: 1,
  nombre: 'Bolso Beige Clásico',
  precio: 79.99,
  precioAntes: 99.99,
  descuento: true,
  imagenes: ['https://via.placeholder.com/150'],
  rating: 4.5,
}

export const Default = () => <ProductCard product={sampleProduct} />