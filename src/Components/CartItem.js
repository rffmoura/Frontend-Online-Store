import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;

    return (
      <div>
        <h2 data-testid="shopping-cart-product-name">
          { title }
        </h2>
        <img src={ thumbnail } alt={ title } />
        <p>
          { price }
        </p>
        <p data-testid="shopping-cart-product-quantity">
          1
        </p>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CartItem;
