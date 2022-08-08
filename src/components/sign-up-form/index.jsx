import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../api/firebase/authetication';
import { createUserDocumentFromAuth } from '../../api/firebase/firestore';
import FormInput from '../form-input';
import AppButton, { BUTTON_VARIANTS } from '../app-button';

const DEFAULT_FORM_DATA = {
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const SignUpForm = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const { displayName, email, password, passwordConfirm } = formData;

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  };

  const resetFormData = () => {
    setFormData(DEFAULT_FORM_DATA);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(formData.password !== formData.passwordConfirm) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(formData.email, formData.password);
      await createUserDocumentFromAuth(user , { displayName: formData.displayName });
      resetFormData();
    } catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email already in use');
      } else {
        alert(`User creation encountered an error: ${error}`);
      }
    } 
  };

  return (
    <div className='sign-up'>
      <h2 className='sign-up__heading'>Don&apos;t have an account?</h2>
      <p className='sign-up__subheading'>Sign up with your email</p>
      <form className='sign-up__form' onSubmit={handleSubmit}>
        <FormInput label='Display name' onChange={handleFieldChange} required id='displayName' name='displayName' type='text' value={displayName}/>
        <FormInput label='Email' onChange={handleFieldChange} required id='email-signup' name='email' type='email' value={email}/>
        <FormInput label='Password' onChange={handleFieldChange} required id='password-signup' name='password' type='password' value={password}/>
        <FormInput label='Confirm Password' onChange={handleFieldChange} required id='passwordConfirm' name='passwordConfirm' type='password' value={passwordConfirm}/>
        <AppButton type='submit' variant={BUTTON_VARIANTS.base}>Sign Up</AppButton>
      </form>
    </div>
  );
};

export default SignUpForm;