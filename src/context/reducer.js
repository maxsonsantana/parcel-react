export const reducerCases = {
  test: 'TEST',
  increase: 'INCREASE',
};

const Reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.test:
      console.log('reducer test');
      return state;

    case reducerCases.increase:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
