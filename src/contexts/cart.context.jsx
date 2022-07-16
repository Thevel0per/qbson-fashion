import React, { createContext, useState } from 'react';

const increaseCartItemQuantity = (cartItems, product) => {
  const cartItemIndex = cartItems.findIndex(item => item.product.id === product.id);
  if(cartItemIndex !== -1){
    return cartItems.map((item, i) => i === cartItemIndex ? {...item, quantity: item.quantity + 1} : item);
  } else {
    return [...cartItems, {product: product, quantity: 1}];
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItem: () => {},
});

export const CartContextProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (product) => {
    const updatedCart = increaseCartItemQuantity(cartItems, product);
    setCartItems(updatedCart);
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addCartItem };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
