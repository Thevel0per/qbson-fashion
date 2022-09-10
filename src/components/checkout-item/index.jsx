import './checkout-item.styles.scss';
import React from 'react';
import { addCartItem, removeCartItem, decrementItemQuantity } from '../../store/cart/cart.action';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({item}) => {
  const dispatch = useDispatch();
  const {product, quantity} = item;
  const cartItems = useSelector(selectCartItems);

  const handleQuantityIncrement = () => {
    dispatch(addCartItem(cartItems, product));
  };

  const handleItemRemoval = () => {
    dispatch(removeCartItem(cartItems, product));
  };

  const handleQuantityDecrement = () => {
    dispatch(decrementItemQuantity(cartItems, product));
  };

  return (
    <li className='checkout-item'>
      <img className='checkout-item__image' src={product.imageUrl} />
      <p>{product.name}</p>
      <p className='checkout-item__quantity'>
        <button className='checkout-item__button' onClick={handleQuantityDecrement}>&lt;</button>
        {quantity}
        <button className='checkout-item__button' onClick={handleQuantityIncrement}>&gt;</button>
      </p>
      <p>{product.price}</p>
      <button className='checkout-item__button' onClick={handleItemRemoval}>X</button>
    </li>
  );
};

export default CheckoutItem;
