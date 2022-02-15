import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super()
    this.state = {
      clicksNumber: 0
    };
    this.aoClicar = this.aoClicar.bind(this);
  }
  aoClicar() {
    this.setState((previousState, _props) => ({
        clicksNumber: previousState.clicksNumber + 1
    }));
    console.log(this)
  }

  paintItGreen(number) {
    if (number % 2 === 0) return 'color';
    return '';
  }

  render() {
    const { buttonNumber } = this.props;
    const clickNumber = this.state.clicksNumber;
    return <button className={this.paintItGreen(clickNumber)} onClick={this.aoClicar}>Botao { buttonNumber } { clickNumber }</button>
  }
}

export default Button;