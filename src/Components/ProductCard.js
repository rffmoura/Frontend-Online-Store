import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, cartFunc } = this.props;
    const { title, thumbnail, price, id, attributes } = product;

    return (
      <div data-testid="product">
        <h2>
          { title }
        </h2>
        <img src={ thumbnail } alt={ title } />
        <p>
          { price }
        </p>
        <button
          type="button"
          onClick={ () => cartFunc(product) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
        <Link
          to={ {
            pathname: `/product-details/${id}`,
            state: {
              title,
              thumbnail,
              price,
              id,
              attributes,
            },
          } }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <h2>{ title }</h2>
            <img src={ thumbnail } alt={ title } />
            <p>{ `R$${price.toFixed(2)}` }</p>
          </div>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape([]).isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  attributes: PropTypes.shape([]).isRequired,
  cartFunc: PropTypes.func.isRequired,
};

export default ProductCard;
