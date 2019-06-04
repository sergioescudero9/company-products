import {
  HOME_LOADING,
  PRODUCTS_LOADED_FAILED,
  PRODUCTS_LOADED_SUCCESS,
} from './const';

const loadRequest = () => ({
  type: HOME_LOADING,
});

const loadProductSuccess = products => ({
  type: PRODUCTS_LOADED_SUCCESS,
  products,
});

const loadProductFailed = error => ({
  type: PRODUCTS_LOADED_FAILED,
  error,
});

const loadProducts = () => (dispatch) => {
  dispatch(loadRequest());
  fetch('http://localhost:3004/products')
    .then(response => response.json())
    .then((products) => {
      dispatch(loadProductSuccess(products));
    }).catch((error) => {
      dispatch(loadProductFailed(error));
    });
};

export {
  loadProducts
};