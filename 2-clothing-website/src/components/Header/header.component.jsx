import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../Cart-Icon/cart-icon.component';
import CartDropdown from '../Cart-Dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>

    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>

      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}

      <CartIcon />

    </OptionsContainer>

    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// const mapStateToProps = rootReducerState => {
//   return { currentUser: rootReducerState.user.currentUser, hidden: rootReducerState.cart.hidden }
// }

// Approach 1: 

// const mapStateToProps = rootReducerState => {
//   return { currentUser: selectCurrentUser(rootReducerState), hidden: selectCartHidden(rootReducerState) }
// }

// Approach 2: using structures selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);