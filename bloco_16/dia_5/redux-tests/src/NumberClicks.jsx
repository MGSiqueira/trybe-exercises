import React from 'react';
import { connect } from 'react-redux';
class NumberClicks extends React.Component {
  render() {
    const { myReducer } = this.props;
    console.log(myReducer)
    return <div>{myReducer.counter}</div>;
  }
}

const mapStateToProps = (state) => ({
  myReducer: state.myReducer,
});

export default connect(mapStateToProps)(NumberClicks);