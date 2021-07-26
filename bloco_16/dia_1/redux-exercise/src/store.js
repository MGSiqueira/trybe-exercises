import * as Redux from "redux";

const INICIAL_STATE = { number: 0 };

export const numberIncrease = () => ({ type: "INCREASE" });

export const numberDecrease = () => ({ type: "DECREASE" });

const reducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        number: state.number + 1
      };
    case "DECREASE":
      return {
        ...state,
        number: state.number - 1
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

export default store;