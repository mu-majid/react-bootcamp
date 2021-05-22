export const addCartItem = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
  if (existingItem) {
    
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : { ...cartItem }
    });
  }

  return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
}

export const deleteCartItem = (cartItems, cartItemToDelete) => cartItems.filter(item => item.id !== cartItemToDelete.id);

export const removeSingleCartItem = (cartItems, singleItemToRemove) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === singleItemToRemove.id);

  if (existingItem.quantity === 1) {
    return deleteCartItem(cartItems, existingItem);
  }

  return cartItems.map(item => (item.id === singleItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item))
}