import React, { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card';
import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {
        Object.keys(categoriesMap).map(title =>
          <>
            <h1>{title}</h1>
            <div className='shop'>
              {categoriesMap[title].map(product => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
          </>
        )
      }
    </>
  );
};

export default Shop;
