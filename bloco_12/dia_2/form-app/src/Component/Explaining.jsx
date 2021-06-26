import { Component } from 'react';

class Explaining extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Diga porque este é o seu Monark favorito:<br/>
        <textarea name='explaining' value={ value } onChange={ handleChange }/>
      </label>
    )
  }
}

export default Explaining;