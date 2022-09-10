import React from 'react';
import './product-card.styles.scss';
import AppButton, { BUTTON_VARIANTS } from '../app-button';
import { addCartItem } from '../../store/cart/cart.action';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddButtonClick = () => {
    dispatch(addCartItem(cartItems, product));
  };
  const {name, price, imageUrl} = product;
  return (
    <div className='product-card'>
      <img alt={`${name} photo`} src={imageUrl} className='product-card__image'/>
      <div className='product-card__footer'>
        <span className='product-card__name'>{name}</span>
        <span className='product-card__price'>{price}</span>
      </div>
      <AppButton variant={BUTTON_VARIANTS.inverted} className='product-card__button' onClickHandler={handleAddButtonClick}>Add to cart</AppButton>
    </div>
  );
};

export default ProductCard;
