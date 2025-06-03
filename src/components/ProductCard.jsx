import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import StarRating from './StarRating'

function DiscountLabel({ precio, precioAntes, descuento }) {
  if (descuento) {
    return (
      <p>
        <span style={{ textDecoration: 'line-through', marginRight: '0.5rem' }}>${precioAntes.toFixed(2)}</span>
        <span>${precio.toFixed(2)}</span>
      </p>
    )
  }
  return <p>${precio.toFixed(2)}</p>
}

export default function ProductCard({ product }) {
  const favoritesRef = useRef([])
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      favoritesRef.current = JSON.parse(storedFavorites)
    }
    setIsFavorite(favoritesRef.current.includes(product.id))
  }, [product.id])

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsFavorite((prev) => {
      let updatedFavorites
      if (!prev) {
        // Add to favorites
        if (!favoritesRef.current.includes(product.id)) {
          favoritesRef.current.push(product.id)
        }
        updatedFavorites = favoritesRef.current
      } else {
        // Remove from favorites
        favoritesRef.current = favoritesRef.current.filter(id => id !== product.id)
        updatedFavorites = favoritesRef.current
      }
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      return !prev
    })
  }

  return (
    <Link to={`/producto/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem', cursor: 'pointer', width: '150px', position: 'relative' }}>
        {/* Favoritos Button */}
        <button
          onClick={handleFavoriteClick}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            fontSize: '24px',
            color: isFavorite ? '#cc0000' : '#333',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10
          }}
          aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          <span style={{ fontSize: '1.2rem', color: isFavorite ? 'red' : 'gray' }}>❤️</span>
        </button>
        <img src={product.imagenes[0]} alt={product.nombre} width="150" height="200" />
        <h3>{product.nombre}</h3>
        <StarRating rating={product.rating} />
        <DiscountLabel precio={product.precio} precioAntes={product.precioAntes} descuento={product.descuento} />
      </div>
    </Link>
  )
}