import React from 'react';
import './button.styles.scss';

const Button = ({children , isGoogleSignInBtn, inverted, ...otherProps}) => {
  return (
    <button 
      className={`${inverted ? 'inverted': ''} ${isGoogleSignInBtn ? 'google-sign-in' : ''} custom-button`} 
      {...otherProps} 
    >
      {children}
    </button>
  );
};

export default Button;