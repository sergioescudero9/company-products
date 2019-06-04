import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Card, CardTitle, CardText,
} from 'react-md';
import Value from '../../components/Value';
import * as actions from '../../state/Products/action';
import { validCategories } from '../../utils';

class Products extends Component {
  componentDidMount() {
    const { default: loadProducts, match: { params: { category } } } = this.props;
    loadProducts(category);
  }

  render() {
    const { products, loading, category } = this.props;
    const upperCaseCategory = category.toUpperCase();
    const isValidCategory = validCategories.includes(upperCaseCategory);
    let filteredProducts = products;
    // categories.map((sub) => sub.toUpperCase())
    if (isValidCategory) {
      filteredProducts = products.filter(({ categories }) => (
        categories.map(sub => sub.toUpperCase()).includes(upperCaseCategory)
      ));
    }
    return (
      <section>
        <h5>
          Showing: 
          {filteredProducts.length}
          -
          Hiddden:
          {products.length - filteredProducts.length}
        </h5>
        {
          filteredProducts.map(({
            id, name, description, categories, photo, stock, price, brand,
          }) => (
            <Card key={id} className="md-block-centered product-card">
              <CardTitle title={name} subtitle={`${categories.join(',')} - ${brand}`} />
              <CardText>
                <div>
                  <img className="card-image" alt="product" src={photo} />
                  <div className="card-description">
                    <p>{description}</p>
                    <Value name="Stock" value={stock} />
                    <Value name="Price" value={price} />
                  </div>
                </div>
              </CardText>
            </Card>
          ))
        }
      </section>
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
  category: PropTypes.string,
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

Products.defaultProps = { category: '' };

export default connect(mapStateToProps, actions)(Products);
