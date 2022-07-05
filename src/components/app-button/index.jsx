/* eslint-disable react/prop-types */
import React from 'react';
import './app-button.styles.scss';

const AppButton = ({children, type, variant, onClickHandler}) => {
  return <button onClick={onClickHandler} className={`button ${variant !== 'default' ? `button--${variant}` : ''}`} type={type}>{children}</button>;
};

export default AppButton;