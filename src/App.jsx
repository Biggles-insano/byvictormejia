import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StorePage from './pages/StorePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import Header from './components/Header' // 👈 Importamos el header

function App() {
  return (
    <Router>
      {/* Barra de navegación visible siempre */}
      <Header />

      {/* Contenido que cambia según la ruta */}
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/producto/:id" element={<ProductPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
    </Router>
  )
}

export default App