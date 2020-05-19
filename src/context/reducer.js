export const reducerCases = {
  test: 'TEST',
  increase: 'INCREASE',
};

/**
 * This is the reducer function, that will prepare the update on the state
 * @param {*} state This is the current state of the applications
 * @param {Object} typeAndPayload This is the type and payload for the update
 * @param {String} typeAndPayload.type The type from the reducerCases object
 * @param {*} typeAndPayload.payload This is the payload, could be anything
 */
const Reducer = (state, { type, payload }) => {
  switch (type) {
    case reducerCases.test:
      console.log('reducer test');
      return state;

    case reducerCases.increase:
      return {
        ...state,
        count: state.count + payload,
      };

    default:
      return state;
  }
};

export default Reducer;
