import { Header } from '../components/Header';
import { ProductContainer } from '../components/ProductContainer';
// import { products } from '../data/products';
import axios from 'axios';
import { useState, useEffect } from "react";
import './HomePage.css'

export function HomePage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/products').then((response) => {
      setProducts(response.data);
    });

    axios.get('http://localhost:3000/api/cart-items').then((response)=>{
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return <ProductContainer product={product} key={product.id} />
          })}
        </div>
      </div>
    </>
  );
}