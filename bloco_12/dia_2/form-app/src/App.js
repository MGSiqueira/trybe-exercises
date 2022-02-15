import React, { Component } from 'react';
import Explaining from './Component/Explaining';
import MonarkFavorito from './Component/MonarkFavorito'
import Idade from './Component/Idade';
import VaiComparecer from './Component/VaiComparecer';
import './App.css'

class App extends Component {
  constructor() {
    super();
    
    this.handleChange = this.handleChange.bind(this);
    this.handleErros = this.handleErros.bind(this);

    this.state = {
      idade: '',
      vaiComparecer: false,
      monarkFavorito: 'choose',
      explaining: '',
      formularioComErros: false,
    }
  }
  
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }
  
  render() {
    return (
    <div>
      <h1>Eae, Monark aqui!</h1>
      <form>
        <fieldset>
          <legend><h2>E bem vindos a mais um form</h2></legend>
          <Idade value={ this.state.idade } handleChange={ this.handleChange }/>
          <br/>
          <VaiComparecer value={ this.state.vaiComparecer } handleChange={ this.handleChange }/>
          <br/>
          <MonarkFavorito value={ this.state.monarkFavorito } handleChange={ this.handleChange }/>
          <br/>
          <Explaining value={ this.state.explaining } handleChange={ this.handleChange }/>
        </fieldset>
        <br/>
        <label>
          <input type='file'/>
        </label>
      </form>
    </div>
    )
  }
}

export default App;
