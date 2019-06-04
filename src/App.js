import React from 'react';
import logo from './logo.svg';
import { NavigationDrawer } from 'react-md';
import { Provider } from 'react-redux';
import store from './state';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to react-md"
      >
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
      </NavigationDrawer>
    </Provider>
  );
}

export default App;
