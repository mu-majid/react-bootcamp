import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
  return (
    <div className="header">


      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {
          currentUser ? 
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
        }
        <Link className="option" to="/cart">CART</Link>
      </div>
    </div>
  )

};
const mapStateToProps = rootReducerState => {
  return { currentUser: rootReducerState.user.currentUser }
}

export default  connect(mapStateToProps)(Header);