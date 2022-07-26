import React from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item';

const Checkout = () => {
  const { cartItems, calculateCartTotalPrice } = useContext(CartContext);

  return(
    <article className='checkout'>
      <header className='checkout__header'>
        <p>Product</p>
        <p>Description</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </header>
      <section>
        <ul className='checkout__list'>
          { cartItems.map((item, i) => <CheckoutItem item={item} key={`checkout-item-${i}`} />)}
        </ul>
      </section>
      <footer className='checkout__footer'>
        <p className='checkout__total'>Total: ${calculateCartTotalPrice()}</p>
      </footer>
    </article>
  );
};

export default Checkout;
