import './category-preview.styles.scss';
import React from 'react';
import ProductCard from '../product-card';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
  return (
    <section className='category-preview'>
      <header>
        <Link to={title}>
          <h2>{ title.toUpperCase() }</h2>
        </Link>
      </header>
      <ul className='category-preview__products'>
        { products.slice(0, 4).map(product => 
          <ProductCard key={`product-${product.id}}`} product={product} />
        ) }
      </ul>
    </section>
  );
};

export default CategoryPreview;