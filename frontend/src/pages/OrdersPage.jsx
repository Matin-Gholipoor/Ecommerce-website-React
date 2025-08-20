import { Link } from 'react-router';
import { Header } from '../components/Header'
import './OrdersPage.css'
import { useEffect, useState } from 'react';
import { OrderContainer } from '../components/OrderContainer';
import axios from 'axios';

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get('/api/orders?expand=products').then((response) => {
      setOrders(response.data);
    });
  }, []);

  console.log(orders);

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return <OrderContainer key={order.id} order={order} />
          })}
        </div>
      </div>
    </>
  );
}