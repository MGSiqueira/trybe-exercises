import './App.css';
import React from 'react';
import Button from './components/Button.jsx';
const array = [1, 2, 3];

class App extends React.Component {
  render() {
    return (
      <div className="buttons">{
      array.map(numero => <Button buttonNumber={ numero } key={ numero }/>)
    }</div>
    )
  }
}

export default App;
