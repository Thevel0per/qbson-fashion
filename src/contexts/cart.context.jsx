/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartContextProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};