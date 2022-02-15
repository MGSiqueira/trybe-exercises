import { Component } from 'react';

class VaiComparecer extends Component {
  render() {
    const { value, handleChange } = this.props;
    
    let error = undefined;
    if (value === false) {
      error = 'Marque aqui se quiser comparecer'
    }
    return (
      <label>
        Vai comparecer?:
        <input type='checkbox' name='vaiComparecer' value={ value } onChange={ handleChange }/>
        <div className='error'>{ error ? error : '' }</div>
      </label>
    )
  }
}

export default VaiComparecer;