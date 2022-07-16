import React, { useContext } from 'react';
import './product-card.styles.scss';
import AppButton from '../app-button';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({product}) => {
  const { addCartItem } = useContext(CartContext);
  const handleAddButtonClick = () => {
    addCartItem(product);
  };
  const {name, price, imageUrl} = product;
  return (
    <div className='product-card'>
      <img alt={`${name} photo`} src={imageUrl} className='product-card__image'/>
      <div className='product-card__footer'>
        <span className='product-card__name'>{name}</span>
        <span className='product-card__price'>{price}</span>
      </div>
      <AppButton variant='inverted' className='product-card__button' onClickHandler={handleAddButtonClick}>Add to cart</AppButton>
    </div>
  );
};

export default ProductCard;
