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
  
  fetch(`${process.env.REACT_APP_END_POINT}products`)
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