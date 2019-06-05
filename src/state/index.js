import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './Products';
import contactReducer from './Contact';

const rootReducer = combineReducers({
  productsReducer,
  contactReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
