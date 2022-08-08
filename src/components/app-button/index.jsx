import React from 'react';
import { BaseButton, GoogleSignInButton, InvertedButton } from './app-button.styles';

export const BUTTON_VARIANTS = {
  base: 'base',
  google: 'google',
  inverted: 'inverted',
};

const getButton = (buttonVariant = BUTTON_VARIANTS.base) => (
  {
    [BUTTON_VARIANTS.base]: BaseButton,
    [BUTTON_VARIANTS.google]: GoogleSignInButton,
    [BUTTON_VARIANTS.inverted]: InvertedButton,
  }[buttonVariant]
);

const AppButton = ({children, type, variant, onClickHandler, className}) => {
  const CustomButton = getButton(variant);

  return <CustomButton onClick={onClickHandler} className={className} type={type}>{children}</CustomButton>;
};

export default AppButton;