import React from 'react';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item';
import { selectCartItems, selectCartTotalValue } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartTotalValue = useSelector(selectCartTotalValue);
  const cartItems = useSelector(selectCartItems);

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
        <p className='checkout__total'>Total: ${cartTotalValue}</p>
      </footer>
    </article>
  );
};

export default Checkout;
