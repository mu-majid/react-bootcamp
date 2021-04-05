import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import Button from '../Button/button.component';
import FormInput from '../Form-Input/form-input.component';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, displayName, email, password } = this.state;
    if (password !== confirmPassword) {
      alert('Passwords don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName}); // stores user in firestore

      // clear the form
      this.setState(
        {
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }
      )
    }
    catch (error) {
      console.error('Error Sign Up ', error)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { confirmPassword, displayName, email, password } = this.state;

    return (
      <div className="sign-up">
        <h2>I don Not have an Account</h2>
        <span>Sign up with email and password.</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <Button type="submit">SIGN UP</Button>
        </form>
      </div>
    )
  }
}

export default SignUp;