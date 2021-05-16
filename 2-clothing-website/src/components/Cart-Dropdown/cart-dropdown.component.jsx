import React from 'react';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import Button from '../Button/button.component';
import CartItem from '../Cart-Item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>

      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { cartItems: selectCartItems(state) }
}

export default connect(mapStateToProps)(CartDropdown);