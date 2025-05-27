import { useEffect } from 'react'

export default function Notification({ message, duration = 3000, onClose }) {
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => {
      onClose && onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [message, duration, onClose])

  if (!message) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#222',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  )
}