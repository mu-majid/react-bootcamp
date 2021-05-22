import React from 'react';

import './checkout.styles.scss';

const CheckoutItem = ({cartItem}) => {
  return (
    <div className="checkout-item">
      <div className="img-container">
        <img src={cartItem.imageUrl} alt="item"/>
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">{cartItem.quantity}</span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
}

export default CheckoutItem;