import { Header } from '../components/Header';
import { ProductContainer } from '../components/ProductContainer';
import { products } from '../data/products';
import './HomePage.css'

export function HomePage() {
  return (
    <>
      <title>Ecommerce Project</title>

      <Header />

      <div class="home-page">
        <div class="products-grid">
          {products.map((product, index) => {
            return <ProductContainer index={index} key={product.id} />
          })}
        </div>
      </div>
    </>
  );
}