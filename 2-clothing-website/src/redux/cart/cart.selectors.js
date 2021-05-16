import { createSelector } from 'reselect';

// Memoization of a redux state selector to prevent multiple un-necessary renders

const selectCart = state => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0)
);
