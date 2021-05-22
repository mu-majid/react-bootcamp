import React from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem, removeSingleItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, deleteCartItem, removeSingleItem, addItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeSingleItem(cartItem)}>&#10094;</div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={() => deleteCartItem(cartItem)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deleteCartItem: item => dispatch(deleteItem(item)),
  removeSingleItem: item => dispatch(removeSingleItem(item)),
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);