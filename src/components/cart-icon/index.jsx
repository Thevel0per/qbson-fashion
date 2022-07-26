import './cart-icon.styles.scss';
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartItems} = useContext(CartContext);
  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-icon' onClick={toggleCartOpen}>
      <span className="material-symbols-rounded cart-icon__svg">
        shopping_bag
      </span>
      <span className='cart-icon__items'>{cartItems.reduce((total, current) => total + current.quantity, 0)}</span>
    </div>
  ); 
};

export default CartIcon;