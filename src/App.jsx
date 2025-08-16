import { HomePage } from './pages/HomaPage'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/CheckoutPage'
import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='Checkout' element={<CheckoutPage />} />
      </Routes>
    </>
  )
}

export default App
