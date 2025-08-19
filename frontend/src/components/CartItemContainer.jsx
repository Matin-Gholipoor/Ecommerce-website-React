import { centsToDollars } from '../utils/money'
import { DeliveryOption } from './DeliveryOption';

export function CartItemContainer({ cartItem , deliveryOptions}) {
  return (
    <>
      <div className="cart-item-container">
        <div className="delivery-date">
          Delivery date: Tuesday, June 21
        </div>

        <div className="cart-item-details-grid">
          <img className="product-image"
            src={cartItem.product.image} />

          <div className="cart-item-details">
            <div className="product-name">
              {cartItem.product.name}
            </div>
            <div className="product-price">
              ${centsToDollars(cartItem.product.priceCents)}
            </div>
            <div className="product-quantity">
              <span>
                Quantity: <span className="quantity-label">{cartItem.quantity}</span>
              </span>
              <span className="update-quantity-link link-primary">
                Update
              </span>
              <span className="delete-quantity-link link-primary">
                Delete
              </span>
            </div>
          </div>

          <div className="delivery-options">
            <div className="delivery-options-title">
              Choose a delivery option:
            </div>
            {deliveryOptions.map((option)=>{
              return <DeliveryOption key={option.id} option={option} />
            }) }
          </div>
        </div>
      </div>
    </>
  );
}