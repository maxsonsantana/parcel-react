const Reducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      return state;

    case 'INCREASE':
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
