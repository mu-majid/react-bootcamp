import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { googleSignInSart } from '../../redux/user/user.actions';
import Button from '../Button/button.component';
import FormInput from '../Form-Input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '', password: '',
      loggedIn: false
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    }
    catch (error) {
      console.error(error);
    }
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const { googleSignInstart } = this.props;
    return (
      <div className="sign-in">
        <h2>already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="password"
          />

          <div className="buttons">

            <Button type="submit" > Sign In </Button>
            <Button type="button" onClick={googleSignInstart} isGoogleSignInBtn={true}> Sign In With Google </Button>
          </div>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInstart: () => dispatch(googleSignInSart())
})

export default connect(null, mapDispatchToProps)(SignIn);