import React, { Suspense } from 'react';
import { NavigationDrawer } from 'react-md';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Links from './components/Links';
import store from './state';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const NoMatch = React.lazy(() => import('./pages'));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <NavigationDrawer
            drawerTitle="react-md with CRA"
            toolbarTitle={Links}
          >
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
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
