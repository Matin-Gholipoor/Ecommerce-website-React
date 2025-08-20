import dayjs from 'dayjs';
import {centsToDollars} from '../utils/money';
import { OrderedProduct } from './OrderedProduct';

export function OrderContainer({ order }) {
  return (
    <>
      <div className="order-container">

        <div className="order-header">
          <div className="order-header-left-section">
            <div className="order-date">
              <div className="order-header-label">Order Placed:</div>
              <div>{dayjs(order.orderTimeMs).format('MMMM D')}</div>
            </div>
            <div className="order-total">
              <div className="order-header-label">Total:</div>
              <div>${centsToDollars(order.totalCostCents)}</div>
            </div>
          </div>

          <div className="order-header-right-section">
            <div className="order-header-label">Order ID:</div>
            <div>{order.id}</div>
          </div>
        </div>

        <div className="order-details-grid">
          {order.products.map((product)=>{
              return <OrderedProduct key={product.productId} product={product} />
          })}
        </div>
      </div>
    </>
  );
}