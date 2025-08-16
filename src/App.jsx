import { HomePage } from './pages/HomaPage'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='Checkout' element={<CheckoutPage />} />
        <Route path='orders' element={<OrdersPage />} />
      </Routes>
    </>
  )
}

export default App
