import React, { createContext, useReducer } from 'react';

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  decrementItemQuantity: () => {},
  calculateCartTotalPrice: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const ALLOWED_ACTIONS = {
  'SET_CART_ITEMS': 'SET_CART_ITEMS',
  'SET_IS_CART_OPEN': 'SET_IS_CART_OPEN'
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch(type){
  case ALLOWED_ACTIONS.SET_CART_ITEMS:
    return {
      ...state,
      ...payload
    };
  case ALLOWED_ACTIONS.SET_IS_CART_OPEN:
    return {
      ...state,
      isCartOpen: payload
    };
  default:
    throw new Error(`Unhandled type of action in cartReducer: ${type} is not allowed.`);
  }
};

export const CartContextProvider = ({children}) => {
  const [{cartItems, isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = (isCartOpen) => {
    dispatch({type: ALLOWED_ACTIONS.SET_IS_CART_OPEN, payload: isCartOpen});
  };

  const addCartItem = (product) => {
    const updatedCart = increaseCartItemQuantity(cartItems, product);
    dispatch({type: ALLOWED_ACTIONS.SET_CART_ITEMS, payload: {cartItems: updatedCart}});
  };
  const removeCartItem = (product) => {
    const updatedCart = deleteCartItem(cartItems, product);
    dispatch({type: ALLOWED_ACTIONS.SET_CART_ITEMS, payload: {cartItems: updatedCart}});
  };
  const decrementItemQuantity = (product) => {
    const updatedCart = decreaseCartItemQuantity(cartItems, product);
    dispatch({type: ALLOWED_ACTIONS.SET_CART_ITEMS, payload: {cartItems: updatedCart}});
  };
  const calculateCartTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addCartItem, removeCartItem, decrementItemQuantity, calculateCartTotalPrice };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
