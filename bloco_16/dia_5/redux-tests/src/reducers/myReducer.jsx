const Initial_State = {
  counter: 0,
};
function myReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'ADD_CLICK':
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}
export default myReducer;