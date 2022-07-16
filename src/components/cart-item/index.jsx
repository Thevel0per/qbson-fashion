import './cart-item.styles.scss';
import React from 'react';

const CartItem = ({cartItem}) => {
  const {product, quantity} = cartItem;
  return (
    <div>
      <h2>{ product.name }</h2>
      <span>{ quantity }</span>
    </div>
  );
};

export default CartItem;
