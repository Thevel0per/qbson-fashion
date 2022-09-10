import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AppLogo } from '../../assets/images/logo.svg';
import './navigation-bar.styles.scss';
import { signOutUser } from '../../api/firebase/authetication';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
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