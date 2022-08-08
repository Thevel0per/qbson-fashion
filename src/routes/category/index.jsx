import './category.styles.scss';
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card';

const Category = () => {
  const { category }  = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
