import './cart-item.styles.scss';
import React from 'react';

const CartItem = ({cartItem}) => {
  const {product, quantity} = cartItem;
  return (
    <div className='cart-item'>
      <img className='cart-item__image' src={product.imageUrl} alt={product.name}/>
      <div className='cart-item__details'>
        <h2 className='cart-item__name'>{ product.name }</h2>
        <span className='cart-item__price'>{ quantity } x ${product.price}</span>
      </div>
    </div>
  );
};

export default CartItem;
