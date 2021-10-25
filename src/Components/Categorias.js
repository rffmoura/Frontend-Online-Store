import React from 'react';
import PropTypes from 'prop-types';

class Categorias extends React.Component {
  render() {
    const { lista } = this.props;
    return (
      <ul>
        {lista.map(({ id, name }) => (
          <li
            data-testid="category"
            key={ id }
          >
            { name }
          </li>))}
      </ul>
    );
  }
}

Categorias.propTypes = {
  lista: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Categorias;
