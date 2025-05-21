import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StorePage from './pages/StorePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/producto/:id" element={<ProductPage />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
    </Router>
  )
}

export default App