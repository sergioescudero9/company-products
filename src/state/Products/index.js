import {
  HOME_LOADING,
  PRODUCTS_LOADED_FAILED,
  PRODUCTS_LOADED_SUCCESS,
} from './const';

const initialState = {
  loading: false,
  products: [],
  category: '',
};

function home(state = initialState, { type, products, category }) {
  switch (type) {
    case HOME_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PRODUCTS_LOADED_SUCCESS:
      return {
        ...state,
        products,
        category,
        loading: false,
      };
    case PRODUCTS_LOADED_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default home;
