import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Busca from './Components/Busca';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Busca } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
