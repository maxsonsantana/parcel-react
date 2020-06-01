import { useContext } from 'react';
import AppContext from './context';
import { reducerCases as redux } from './reducer';

/**
 * This action will return the state and the actions to change de state.
 */
const useActions = () => {
  const { state, dispatch } = useContext(AppContext);

  const consoleTest = (payload) => {
    console.log('[USE_ACTION]');
    dispatch({ type: redux.test, payload });
    return;
  };

  const increase = (payload) => {
    dispatch({ type: redux.increase, payload });
    return;
  };

  return {
    state,
    consoleTest,
    increase,
  };
};

export default useActions;
