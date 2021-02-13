import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import React from 'react';
import RegistrationPage from './pages/registration/registration';
import ShopPage from './pages/shop/shop'
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>        
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={RegistrationPage} />
        </Switch>      
      </div>
    );
  }
}

export default App;