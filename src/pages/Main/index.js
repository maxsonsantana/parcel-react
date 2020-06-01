import React from 'react';
import useAction from '../../context/useActions';

/**
 * This is the basic docs for this component
 */
const Main = () => {
  const { state, consoleTest, increase } = useAction();
  const { count } = state;

  return (
    <>
      <h1>Test Page</h1>
      <p>{count}</p>
      <button onClick={consoleTest}>Click-me</button>
      <button onClick={() => increase(1)}>Increase</button>
    </>
  );
};

export default Main;
