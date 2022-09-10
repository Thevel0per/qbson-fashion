import './category.styles.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const Category = () => {
  const { category }  = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <section>
      <ul className='category-products'>
        { products &&
            products.map(product => <ProductCard key={`${category}-product-${product.id}`} product={product} />)
        }
      </ul>
    </section>
  );
};

export default Category;
