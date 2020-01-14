import React, { useContext } from 'react';
import AppContext from '../context/context';

const App = () => {
  const { state, dispatch } = useContext(AppContext);
  const { count } = state;

  return (
    <>
      <h1>Teste</h1>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'TEST', payload: 'WORKING' })}>
        Click-me
      </button>
      <button onClick={() => dispatch({ type: 'INCREASE', payload: 1 })}>
        Increase
      </button>
    </>
  );
};

export default App;
