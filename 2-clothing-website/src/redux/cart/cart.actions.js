import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({ type: CartActionTypes.TOGGLE_CART_HIDDEN });
export const addItem = item => ({type: CartActionTypes.ADD_ITEM, payload: item});
export const deleteItem = item => ({type: CartActionTypes.DELETE_ITEM, payload: item});
export const removeSingleItem = item => ({type: CartActionTypes.REMOVE_SINGLE_ITEM, payload: item});