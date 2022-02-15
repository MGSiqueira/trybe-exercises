import React from "react";
import "./styles.css";
import { numberIncrease, numberDecrease } from "./store";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  handleDecrease = () => {
    this.props.dispatch(numberDecrease());
  };

  handleIncrease = () => {
    this.props.dispatch(numberIncrease());
  };

  render() {
    const { number } = this.props.getState();
    return (
      <main className="app">
        <h1>{number}</h1>
        <section className="buttons">
          <button onClick={this.handleDecrease}>Diminui</button>
          <button onClick={this.handleIncrease}>Aumenta</button>
        </section>
      </main>
    );
  }
}

export default App;
