import { Header } from '../components/Header';
import { ProductContainer } from '../components/ProductContainer';
// import { products } from '../data/products';
import './HomePage.css'

export function HomePage({products, cart}) {


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