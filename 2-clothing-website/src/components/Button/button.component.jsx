import React from 'react';
import './button.styles.scss';

const Button = ({children , isGoogleSignInBtn, ...otherProps}) => {
  return (
    <button 
      className={`${isGoogleSignInBtn ? 'google-sign-in' : ''} custom-button`} 
      {...otherProps} 
    >
      {children}
    </button>
  );
};

export default Button;