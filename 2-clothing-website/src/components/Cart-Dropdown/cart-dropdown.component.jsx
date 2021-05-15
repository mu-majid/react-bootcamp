import React from 'react';
import Button from '../Button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">

      </div>

      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;