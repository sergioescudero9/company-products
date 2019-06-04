import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Card, CardTitle, CardText, Slider,
} from 'react-md';
import * as actions from '../../state/Home/action';

class Home extends Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products, loading } = this.props;
    console.log(loading);
    return (
      <div>
        <Card className="md-block-centered">
          <CardTitle title="Using CardTitle" subtitle="With CardText" />
          <CardText>
            <p>
              The component is really just useful for displaying any
              content with some additional padding.
            </p>
            <Slider id="example-card-slider" />
          </CardText>
        </Card>
        <div>
          <h1>Hola</h1>
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
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, actions)(Home);
