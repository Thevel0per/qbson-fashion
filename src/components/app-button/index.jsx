import React from 'react';
import './app-button.styles.scss';

const AppButton = ({children, type, variant, onClickHandler, className}) => {
  return <button onClick={onClickHandler} className={`button ${variant !== 'default' ? `button--${variant}` : ''} ${className}`} type={type}>{children}</button>;
};

export default AppButton;