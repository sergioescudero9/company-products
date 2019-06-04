import React from 'react';
import { NavigationDrawer } from 'react-md';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Links from './components/Links';
import navItems from './components/NavItems';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Products from './pages/Products';
import NoMatch from './pages';
import store from './state';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavigationDrawer
          navItems={navItems}
          toolbarTitle={<div className="header-content"><Links /></div>}
        >
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/products/:category" component={Products} />
              <Route exact path="/clients" component={Clients} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </NavigationDrawer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
