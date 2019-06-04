import React, { Suspense } from 'react';
import { NavigationDrawer } from 'react-md';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Links from './components/Links';
import store from './state';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const Clients = React.lazy(() => import('./pages/Clients'));
const Products = React.lazy(() => import('./pages/Products'));
const NoMatch = React.lazy(() => import('./pages'));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <NavigationDrawer
            toolbarTitle={<div className="header-content"><Links/></div>}
          >
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/clients" component={Clients} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </NavigationDrawer>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
