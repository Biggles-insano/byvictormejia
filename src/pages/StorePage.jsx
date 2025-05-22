import Header from '../components/Header'
import ProductSlider from '../components/ProductSlider'
import ProductList from '../components/ProductList'
import products from '../data/products'

const nuevaColeccion = products.slice(0, 3)
const bolsos = products.slice(3, 7)

const sliderImages = [
  'https://via.placeholder.com/1200x400?text=Banner+1',
  'https://via.placeholder.com/1200x400?text=Banner+2',
  'https://via.placeholder.com/1200x400?text=Banner+3',
]

export default function StorePage() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>by Víctor Mejía</h1>
      <ProductSlider images={sliderImages} />
      <ProductList title="Nueva Colección" products={nuevaColeccion} />
      <ProductList title="Bolsos" products={bolsos} />
    </>
  )
}