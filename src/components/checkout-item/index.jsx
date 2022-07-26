import './checkout-item.styles.scss';
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({item}) => {
  const {product, quantity} = item;
  const {addCartItem, removeCartItem,  decrementItemQuantity} = useContext(CartContext);

  const handleQuantityIncrement = () => {
    addCartItem(product);
  };

  const handleItemRemoval = () => {
    removeCartItem(product);
  };

  const handleQuantityDecrement = () => {
    decrementItemQuantity(product);
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
