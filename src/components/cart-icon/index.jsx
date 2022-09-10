import './cart-icon.styles.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const toggleCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div className='cart-icon' onClick={toggleCartOpen}>
      <span className="material-symbols-rounded cart-icon__svg">
        shopping_bag
      </span>
      <span className='cart-icon__items'>{cartCount}</span>
    </div>
  ); 
};

export default CartIcon;