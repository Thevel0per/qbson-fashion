import './cart-dropdown.styles.scss';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppButton from '../app-button';
import CartItem from '../cart-item';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
  const navigate = useNavigate();
  const handleNavigateToCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };
  const { cartItems, setIsCartOpen } = useContext(CartContext);
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