import React from 'react';
import CategoryPreview from '../../components/category-preview';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
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
