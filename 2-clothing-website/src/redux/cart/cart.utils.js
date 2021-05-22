export const addCartItem = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
  if (existingItem) {
    
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : { ...cartItem }
    });
  }

  return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
}

export const deleteCartItem = (cartItems, cartItemToDelete) => cartItems.filter(item => item.id !== cartItemToDelete.id)
