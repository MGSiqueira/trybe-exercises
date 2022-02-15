import { Component } from 'react';

class Idade extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value < 18) error = 'Você deve ter mais de 18 anos para participar';

    return(
      <label>
        Idade:
        <input type='number' name='idade' value={ value } onChange={ handleChange }/>
        <div className='error'>{ error ? error : '' }</div>
      </label>
      
    )
  }
}

export default Idade;