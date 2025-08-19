import dayjs from 'dayjs';
import { centsToDollars } from '../utils/money';

export function DeliveryOption({ option }) {

  return (
    <>
      <div className="delivery-option">
        <input type="radio"
          className="delivery-option-input"
          name="delivery-option-1" />
        <div>
          <div className="delivery-option-date">
            {dayjs().add(option.deliveryDays, 'day').format('dddd, MMMM D')}
          </div>
          <div className="delivery-option-price">
            {option.priceCents ? `$${centsToDollars(option.priceCents)}` : 'FREE'} Shipping
          </div>
        </div>
      </div>
    </>
  );
}