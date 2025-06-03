// src/hooks/useProductHistory.js
import { useState, useMemo } from 'react'
import products from '../data/products'

function useProductHistory() {
  const [history, setHistory] = useState([])

  const addToHistory = (product) => {
    setHistory(prev => {
      const exists = prev.find(p => p.id === product.id)
      if (exists) return prev
      return [...prev, product]
    })
  }

  const recommended = useMemo(() => {
    const tagsSeen = new Set(history.flatMap(p => p.tags || []))

    return products.filter(p => {
      const matches = p.tags?.some(tag => tagsSeen.has(tag))
      const alreadySeen = history.some(h => h.id === p.id)
      return matches && !alreadySeen
    })
  }, [history])

  return { history, addToHistory, recommended }
}

export default useProductHistory