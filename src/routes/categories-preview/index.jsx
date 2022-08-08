import React, { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {
        Object.keys(categoriesMap).map((title, i) => {
          const products = categoriesMap[title];
          return <CategoryPreview title={title} products={products} key={`category-${i}`} />;
        })
      }
    </>
  );
};

export default CategoriesPreview;
