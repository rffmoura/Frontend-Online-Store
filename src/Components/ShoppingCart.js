import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class ShoppingCart extends React.Component {
  checkIfCartIsEmpty = () => {
    const { cart } = this.props;

    if (cart.length > 0) {
      return false;
    }
    return true;
  };

  render() {
    const { cart } = this.props;
    const emptyMessage = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    const cartMap = cart.map((item) => <CartItem key={ item.id } product={ item } />);

    return (
      <div>
        { this.checkIfCartIsEmpty() ? emptyMessage : cartMap }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
