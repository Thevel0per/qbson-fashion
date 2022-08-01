import React, { createContext, useState, useEffect } from 'react';
import { getCollectionWithDocuments } from '../api/firebase/firestore';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionWithDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return <CategoriesContext.Provider value={{categoriesMap}}>{children}</CategoriesContext.Provider>;
};
