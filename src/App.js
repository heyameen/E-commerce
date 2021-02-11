import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import React from 'react';
import ShopPage from './pages/shop/shop'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>        
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>      
    </div>
  );
}

export default App;