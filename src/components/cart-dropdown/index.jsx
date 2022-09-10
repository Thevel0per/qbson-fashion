import './cart-dropdown.styles.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppButton from '../app-button';
import CartItem from '../cart-item';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigateToCheckout = () => {
    dispatch(setIsCartOpen(false));
    navigate('/checkout');
  };
  const cartItems = useSelector(selectCartItems);
  return (
    <div className='cart-dropdown'>
      <ul className='cart-dropdown__items'>
        {
          cartItems.length > 0 ?
            cartItems.map((item, i) => <CartItem key={`cart-item-${i}`} cartItem={item} />)
            : <li>Cart is empty</li>
        }
      </ul>
      <AppButton onClickHandler={handleNavigateToCheckout} className='cart-dropdown__button'>CHECKOUT</AppButton>
    </div>
  );
};

export default CartDropdown;