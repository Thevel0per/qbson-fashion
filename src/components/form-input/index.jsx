import React from 'react';
import './form-input.styles.scss';

// eslint-disable-next-line react/prop-types
const FormInput = ({ label, ...inputProps }) => {
  return (
    <div className='form-input'>
      <input className='form-input__input' {...inputProps}/>
      <label className={`form-input__label ${inputProps.value.length ? 'form-input__label--shrinked' : '' }`} htmlFor={inputProps.id}>{label}</label>
    </div>
  );
};

export default FormInput;