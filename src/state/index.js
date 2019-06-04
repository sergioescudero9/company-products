import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './Products';

const rootReducer = combineReducers({
  productsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
