import {
  HOME_LOADING,
  PRODUCTS_LOADED_FAILED,
  PRODUCTS_LOADED_SUCCESS,
} from './const';

const loadRequest = () => ({
  type: HOME_LOADING,
});

const loadProductSuccess = (products, category) => ({
  type: PRODUCTS_LOADED_SUCCESS,
  products,
  category,
});

const loadProductFailed = error => ({
  type: PRODUCTS_LOADED_FAILED,
  error,
});

const loadProducts = category => (dispatch) => {
  dispatch(loadRequest());
  fetch(`${process.env.REACT_APP_END_POINT}products`)
    .then(response => response.json())
    .then((products) => {
      dispatch(loadProductSuccess(products, category));
    }).catch((error) => {
      dispatch(loadProductFailed(error));
    });
};

export {
  loadProducts as default,
};
