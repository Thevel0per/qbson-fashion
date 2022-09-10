import { CART_ACTION_TYPES } from './cart.types';

const increaseCartItemQuantity = (cartItems, product) => {
  const cartItemIndex = cartItems.findIndex(item => item.product.id === product.id);
  if(cartItemIndex !== -1){
    return cartItems.map((item, i) => i === cartItemIndex ? {...item, quantity: item.quantity + 1} : item);
  } else {
    return [...cartItems, {product: product, quantity: 1}];
  }
};
  
const deleteCartItem = (cartItems, product) => {
  return cartItems.filter(item => item.product.id != product.id);
};
  
const decreaseCartItemQuantity = (cartItems, product) => {
  const cartItem = cartItems.find(item => item.product.id === product.id);
  if(cartItem.quantity <= 1){
    return deleteCartItem(cartItems, product);
  } else {
    return cartItems.map(item => {
      if(item.product.id !== cartItem.product.id) return item;
  
      return {...item, quantity: item.quantity - 1};
    });
  }
};

export const setIsCartOpen = (isCartOpen) =>
  ({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: isCartOpen});

export const addCartItem = (cartItems, product) => {
  console.log({cartItems, product});
  const updatedCart = increaseCartItemQuantity(cartItems, product);
  return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: updatedCart};
};

export const removeCartItem = (cartItems, product) => {
  const updatedCart = deleteCartItem(cartItems, product);
  return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: updatedCart};
};

export const decrementItemQuantity = (cartItems, product) => {
  const updatedCart = decreaseCartItemQuantity(cartItems, product);
  return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: updatedCart};
};