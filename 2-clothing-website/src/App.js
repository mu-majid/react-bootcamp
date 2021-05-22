import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Homepage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/shop.component';
import SignInAndUpPage from './pages/Sign-in-up/sign-in-up.component';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/Checkout/checkout.component';

class App extends React.Component {


  unsubFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // subscribe to firebase auth, we get user session persistence from this subscription
    this.unsubFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        console.log(' auth change IF')

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          );
          
        });
      }
      else{
        // in case of sign out, set currentUser to null
        console.log(' auth change ELSE')
        setCurrentUser(userAuth);
      }

    });

  }
  // to prevent memory leaks, unsub from firebase auth
  componentWillUnmount() {
    this.unsubFromAuth();
  }
  render() {

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          {/* <Route exact path="/signin" component={SignInAndUpPage}/> */}
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
