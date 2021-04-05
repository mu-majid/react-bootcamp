import React from 'react';
import SignIn from '../../components/Sign-In/sign-in.component';
import SignUp from '../../components/Sign-Up/sign-up.component';
import './sign-in-up.styles.scss';

const SignInAndUpPage = () => {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndUpPage;