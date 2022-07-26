import React, { createContext, useState } from 'react';

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

export const CartContextProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (product) => {
    const updatedCart = increaseCartItemQuantity(cartItems, product);
    setCartItems(updatedCart);
  };
  const removeCartItem = (product) => {
    const updatedCart = deleteCartItem(cartItems, product);
    setCartItems(updatedCart);
  };
  const decrementItemQuantity = (product) => {
    const updatedCart = decreaseCartItemQuantity(cartItems, product);
    setCartItems(updatedCart);
  };
  const calculateCartTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addCartItem, removeCartItem, decrementItemQuantity, calculateCartTotalPrice };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
