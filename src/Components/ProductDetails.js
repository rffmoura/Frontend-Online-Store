import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { title, thumbnail, price, attributes } } } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h1>{`${title}`}</h1>
        <img src={ thumbnail } alt={ title } />
        <div>
          <h2>Detalhes do produto:</h2>
          <ul>
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                {`${attribute.name}: ${attribute.value_name}`}
              </li>
            ))}
          </ul>
        </div>
        <p>{`R$${price.toFixed(2)}`}</p>
      </div>
    );
  }
}
ProductDetails.propTypes = {
  location: PropTypes.shape([]).isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  attributes: PropTypes.shape([]).isRequired,
};

export default ProductDetails;
