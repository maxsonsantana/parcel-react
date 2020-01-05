const Reducer = (state, action) => {
  switch (action.type) {
    case "TEST":
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default Reducer;
