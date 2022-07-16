import './cart-icon.styles.scss';
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const {isCartOpen,setIsCartOpen} = useContext(CartContext);
  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-icon' onClick={toggleCartOpen}>
      <span className="material-symbols-rounded cart-icon__svg">
        shopping_bag
      </span>
      <span className='cart-icon__items'>0</span>
    </div>
  ); 
};

export default CartIcon;