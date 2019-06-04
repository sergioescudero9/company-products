import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './Home';

const rootReducer = combineReducers({
  homeReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;