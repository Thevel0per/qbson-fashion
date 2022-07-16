/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import PRODUCTS from '../mockData/shop-data.json';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(PRODUCTS);

  return <ProductsContext.Provider value={{products, setProducts}}>{children}</ProductsContext.Provider>;
};
