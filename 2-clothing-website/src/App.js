import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/shop.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
