import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../state/Home/action';

class Home extends Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products, loading } = this.props;
    return (
      <div>
        {
          products.map(({
            id, title, prize, description,
          }) => (
            <div key={id}>
              <h2>{title}</h2>
              <p>{description}</p>
              <p>{prize}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    loading: state.homeReducer.loading,
    products: state.homeReducer.products,
  }
);

Home.propTypes = {
  loadProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    prize: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired),
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, actions)(Home);