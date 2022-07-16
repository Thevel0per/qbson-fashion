import './cart-dropdown.styles.scss';
import React, { useContext } from 'react';
import AppButton from '../app-button';
import CartItem from '../cart-item';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown'>
      <ul className='cart-dropdown__items'>
        { cartItems.map((item, i) => <CartItem key={`cart-item-${i}`} cartItem={item} />) }
      </ul>
      <AppButton className='cart-dropdown__button'>CHECKOUT</AppButton>
    </div>
  );
};

export default CartDropdown;