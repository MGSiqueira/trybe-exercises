import { Component } from 'react';

class MonarkFavorito extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>Escolha um Monark:
        <select name='monarkFavorito' value={ value } onChange={ handleChange }>
          <option>--Escolha uma opção--</option>
          <option>Minecraft</option>
          <option>Depressivo</option>
          <option>Flow</option>
        </select>
      </label>
    )
  }
}

export default MonarkFavorito;