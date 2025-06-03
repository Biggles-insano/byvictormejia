import { useState } from 'react'
import Header from '../components/Header'
import ProductSlider from '../components/ProductSlider'
import ProductCarousel from '../components/ProductCarousel'
import ImageCarousel from '../components/ImageCarousel'
import products from '../data/products'
import './StorePage.css';

const sliderImages = [
  'https://azure-eu-images.contentstack.com/v3/assets/blt18e8db99a28228f2/blt7f9c972677284dc2/68356b272e08711e03a51e55/HERO-SLIDER-02-HP-3005-MOMINT-SNEAKERS-DESK.jpg?branch=prod_2&format=avif&auto=auto',
  'https://www.prada.com/content/dam/pradaspa/home_page/2025/02/CO_Gifts/Pradasphere/Re-nylon_DT.jpg/_jcr_content/renditions/cq5dam.web.3360.3360.jpg',
  'https://highxtar.com/wp-content/uploads/2020/06/highxtar-burberry-runway-1.jpg',
]

export default function StorePage() {
  const [showAll, setShowAll] = useState(false)

  const nuevaColeccion = showAll
    ? products.filter(product => product.categoria?.toLowerCase() !== 'bolsos')
    : products.filter(product => product.categoria?.toLowerCase() !== 'bolsos').slice(0, 3)

  const bolsos = products.filter(product => product.categoria?.toLowerCase() === 'bolsos')

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>by Víctor Mejía</h1>
      <ProductSlider images={sliderImages} />
      <div style={{ textAlign: 'center' }}>
        <h2>Nueva Colección</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}
        >
          {showAll ? 'Ver menos' : 'Ver más'}
        </button>
        <ProductCarousel title="" products={nuevaColeccion} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImageCarousel title="Bolsos" products={bolsos} />
      </div>
    </>
  )
}