import { centsToDollars } from '../utils/money';
import dayjs from 'dayjs'

export function DeliveryOption({ option ,cartItem}) {

  return (
    <>
      <div className="delivery-option">
        <input type="radio"
          className="delivery-option-input"
          name={`delivery-option-${cartItem.productId}`} 
          checked={option.id === cartItem.deliveryOptionId}
        />
        <div>
          <div className="delivery-option-date">
            {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
          </div>
          <div className="delivery-option-price">
            {option.priceCents ? `$${centsToDollars(option.priceCents)} -` : 'FREE'} Shipping
          </div>
        </div>
      </div>
    </>
  );
}