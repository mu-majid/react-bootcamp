import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, deleteCartItem}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item"/>
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">{cartItem.quantity}</span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={() => deleteCartItem(cartItem)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({ deleteCartItem: item => dispatch(deleteItem(item))})

export default connect(null, mapDispatchToProps)(CheckoutItem);