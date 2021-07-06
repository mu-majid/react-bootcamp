import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{itemsCount}</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);