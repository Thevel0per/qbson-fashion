import './cart-dropdown.styles.scss';
import React from 'react';
import AppButton from '../app-button';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <ul className='cart-dropdown__items'></ul>
      <AppButton className='cart-dropdown__button'>CHECKOUT</AppButton>
    </div>
  );
};

export default CartDropdown;