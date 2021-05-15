import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../Cart-Icon/cart-icon.component';
import CartDropdown from '../Cart-Dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => {
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
        <CartIcon />
      </div>

      {
        hidden ? null : <CartDropdown />
      }
    </div>
  )

};
const mapStateToProps = rootReducerState => {
  return { currentUser: rootReducerState.user.currentUser, hidden: rootReducerState.cart.hidden }
}

export default  connect(mapStateToProps)(Header);