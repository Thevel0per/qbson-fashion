import React, { useState, useContext } from 'react';
import './sign-in-form.styles.scss';
import FormInput from '../form-input';
import AppButton from '../app-button';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../api/firebase/authetication';
import { createUserDocumentFromAuth } from '../../api/firebase/firestore';
import { UserContext } from '../../contexts/user-context';

const DEFAULT_FORM_DATA = {
  password: '',
  email: '',
};


const SignInForm = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const { email, password } = formData;

  const { setCurrentUser } = useContext(UserContext);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    setCurrentUser(user);
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
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
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
          <AppButton type='submit' variant='inverted'>Sign In</AppButton>
          <AppButton type='button' onClickHandler={logGoogleUser} variant='google'>Sign in with Google</AppButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;