import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Homepage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/shop.component';
import SignInAndUpPage from './pages/Sign-in-up/sign-in-up.component';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubFromAuth = null;

  componentDidMount() {
    // subscribe to firebase auth, we get user session persistence from this subscription
    this.unsubFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log('Got currentUser snapshot',this.state));

          
        });
      }
      else{
        // in case of sign out, set currentUser to null
        this.setState({ currentUser: userAuth });
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
