import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AppLogo } from '../../assets/images/logo.svg';
import './navigation-bar.styles.scss';
import { UserContext } from '../../contexts/user-context';
import { signOutUser } from '../../api/firebase/authetication';

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
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
      </ul>
    </nav>
  );
};

export default NavigationBar;