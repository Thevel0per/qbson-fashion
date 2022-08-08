import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AppLogo } from '../../assets/images/logo.svg';
import './navigation-bar.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../api/firebase/authetication';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';
import { CartContext } from '../../contexts/cart.context';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <Link className='navigation__link' to='/'>
          <li className='navigation__item'><AppLogo className='navigation__logo'/></li>
        </Link>
        { currentUser ? (
          <span className='navigation__link' onClick={signOutHandler}>
            <li className='navigation__item'>Sign Out</li>
          </span>
        ) : (
          <Link className='navigation__link' to='/login'>
            <li className='navigation__item'>Sign In</li>
          </Link>
        )
        }
        <Link className='navigation__link' to='/shop'>
          <li className='navigation__item'>Shop</li>
        </Link>
        <button className='navigation__button'>
          <li className='navigation__item'><CartIcon /></li>
        </button>
      </ul>
      { isCartOpen && <CartDropdown /> }
    </nav>
  );
};

export default NavigationBar;