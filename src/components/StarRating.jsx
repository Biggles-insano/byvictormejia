import { useState } from 'react'

export default function StarRating({ initialRating = 0, onChange }) {
  const maxStars = 5
  const [rating, setRating] = useState(initialRating)

  const handleClick = (newRating) => {
    setRating(newRating)
    if (onChange) {
      onChange(newRating)
    }
  }

  const stars = []
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <span
        key={i}
        onClick={() => handleClick(i)}
        style={{ 
          color: i <= rating ? '#FFD700' : '#ccc', 
          fontSize: '1.2rem', 
          marginRight: '2px', 
          cursor: 'pointer' 
        }}
      >
        ★
      </span>
    )
  }

  return <div>{stars}</div>
}