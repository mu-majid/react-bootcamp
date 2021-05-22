import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import Button from '../Button/button.component';
import CartItem from '../Cart-Item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          :
          <span className="empty-message">Your Cart Is Empty</span>
        }
      </div>

      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })

export default connect(mapStateToProps)(CartDropdown);