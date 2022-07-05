import React from 'react';
import SignInForm from '../../components/sign-in-form';
import SignUpForm from '../../components/sign-up-form';
import './login.styles.scss';

const Login = () => {
  return (
    <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Login;