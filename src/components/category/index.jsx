import './category.styles.scss';
import React from 'react';

const Category = ({ category }) => {
  const {id, containerClass, imageUrl, title} = category;
  return (
    <div key={id} className={`category category--${containerClass}`}>
      <div className='category__background' style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='category__body'>
        <h2 className='category__title'>{title}</h2>
        <p className='category__subtitle'>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;
