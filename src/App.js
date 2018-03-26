import React, { Component } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import SanmaLanding from './pages/landing_page';
import SanmaAdmin from './pages/admin';
import SanmaLoginPage from './pages/login';
import SanmaShoppingCart from './pages/shopping_cart'

class App extends Component {
  render() {
    return (
        <div>
            <Router>
                <div className="App">
                    <Route path="/" exact component={SanmaLanding}/>
                    <Route path="/admin" component={SanmaAdmin}/>
                    <Route path="/login" component={SanmaLoginPage}/>
                    <Route path="/cart" component={SanmaShoppingCart}/>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
