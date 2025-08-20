import { HomePage } from './pages/HomaPage'
import { Routes, Route } from 'react-router'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import axios from 'axios';
import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('api/products').then((response) => {
      setProducts(response.data);
    });

    axios.get('api/cart-items?expand=product').then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<HomePage products={products} cart={cart} />}
        />
        <Route
          path='checkout'
          element={<CheckoutPage cart={cart} />}
        />
        <Route
          path='orders'
          element={<OrdersPage cart={cart} />}
        />
        <Route path='tracking' element={<TrackingPage />} />
      </Routes>
    </>
  )
}

export default App
