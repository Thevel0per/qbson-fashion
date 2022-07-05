import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AppLogo } from '../../assets/images/logo.svg';
import './navigation-bar.styles.scss';

const NavigationBar = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <Link className='navigation__link' to='/'>
          <li className='navigation__item'><AppLogo className='navigation__logo'/></li>
        </Link>
        <Link className='navigation__link' to='/login'>
          <li className='navigation__item'>Sign In</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;