import React from 'react';
import { Link } from 'react-router-dom';
import Categorias from './Categorias';
import { getCategories } from '../services/api';

class Busca extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.fetchCategoriesAndSetOnState();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  async fetchCategoriesAndSetOnState() {
    const categories = await getCategories();
    this.setState({
      categoriesList: categories,
    });
  }

  render() {
    const { input, categoriesList } = this.state;
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <label htmlFor="input">
          <input
            type="text"
            name="input"
            id="input"
            value={ input }
            onChange={ this.handleChange }
          />
        </label>

        <Categorias lista={ categoriesList } />

        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          {' '}
          Ícone para carrinho de compras
        </Link>

      </div>
    );
  }
}

export default Busca;
