import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/header.component';
import Homepage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/shop.component';
import SignInAndUpPage from './pages/Sign-in-up/sign-in-up.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndUpPage} />
      </Switch>
    </div>
  );
}

export default App;
