import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextField, Button } from 'react-md';
import MDSpinner from 'react-md-spinner';
import * as actions from '../../state/Products/action';

const fields = [
  {
    placeholder: 'Your name...',
    maxLenth: 255,
    errorMessage: 'Please write down your first name',
  },
  {
    placeholder: 'Your last name...',
    maxLenth: 255,
    errorMessage: 'Please write down your last name',
  },
  {
    placeholder: 'Your email address...',
    maxLenth: 255,
    errorMessage: 'Don’t forget to tell us what your email address is',
  },
  {
    placeholder: 'Let us know your concerns!',
    maxLenth: 500,
    errorMessage: 'Don’t forget to write something to use!',
  },
];

class Products extends Component {
  componentDidMount() {
    const { default: loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { loading, errors } = this.props;
    const disableButton = !errors;
    return (
      loading
        ? <MDSpinner />
        : (
          <div>
            {
              fields.map(({ placeholder }) => <TextField placeholder={placeholder} />)
            }
            <Button disabled raised>Hello, World!</Button>
          </div>
        )
    );
  }
}

const mapStateToProps = state => (
  {
    loading: state.productsReducer.loading,
    products: state.productsReducer.products,
    category: state.productsReducer.category,
  }
);

Products.propTypes = {
  default: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired).isRequired,
  match: PropTypes.exact({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.exact({
      category: PropTypes.string,
    }).isRequired,
  }).isRequired,
};


export default connect(mapStateToProps, actions)(Products);
