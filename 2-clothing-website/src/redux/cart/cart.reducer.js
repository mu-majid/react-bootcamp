import { CartActionTypes } from './cart.types';
import { addCartItem, deleteCartItem, removeSingleCartItem } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
  
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload)
      }

    case CartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteCartItem(state.cartItems, action.payload)
      }

    case CartActionTypes.REMOVE_SINGLE_ITEM:
      return {
        ...state,
        cartItems: removeSingleCartItem(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}

export default cartReducer;