import React, { useState } from 'react';
import './sign-in-form.styles.scss';
import FormInput from '../form-input';
import AppButton, { BUTTON_VARIANTS } from '../app-button';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../api/firebase/authetication';

const DEFAULT_FORM_DATA = {
  password: '',
  email: '',
};


const SignInForm = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const { email, password } = formData;

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  };

  const resetFormData = () => {
    setFormData(DEFAULT_FORM_DATA);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormData();
    } catch(error){
      switch(error.code){
      case 'auth/wrong-password':
        alert('Password is incorrect');
        break;
      case 'auth/user-not-found':
        alert('No such user');
        break;
      default:
        alert(`User sign in encountered an error: ${error}`);
      }
    } 
  };

  return (
    <div className='sign-in'>
      <h2 className='sign-in__heading'>Sign In</h2>
      <form className='sign-in__form' onSubmit={handleSubmit}>
        <FormInput label='Email' onChange={handleFieldChange} required id='email-signin' name='email' type='email' value={email}/>
        <FormInput label='Password' onChange={handleFieldChange} required id='password-signin' name='password' type='password' value={password}/>
        <div className='sign-in__actions'>
          <AppButton type='submit' variant={BUTTON_VARIANTS.base}>Sign In</AppButton>
          <AppButton type='button' onClickHandler={logGoogleUser} variant={BUTTON_VARIANTS.google}>Sign in with Google</AppButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;