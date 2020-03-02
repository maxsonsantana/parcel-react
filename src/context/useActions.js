import { useContext } from 'react';
import AppContext from './context';
import { reducerCases as redux } from './reducer';

const actions = () => {
  const { state, dispatch } = useContext(AppContext);

  const consoleTest = payload => {
    console.log('actions test');
    dispatch({ type: redux.test, payload });
    return;
  };

  const increase = payload => {
    dispatch({ type: redux.increase, payload });
    return;
  };

  return {
    state,
    consoleTest,
    increase,
  };
};

export default actions;
