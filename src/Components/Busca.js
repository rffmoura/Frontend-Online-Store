import React from 'react';

class Busca extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { input } = this.state;
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
      </div>
    );
  }
}

export default Busca;
