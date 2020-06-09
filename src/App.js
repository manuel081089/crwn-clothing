import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom'
import ShopPage from './pages/shop/shopPage.component';


function App() {
  return (
    <Switch>
     <Route exact path='/' component={HomePage} />
     <Route exact path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
