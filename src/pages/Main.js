import React from 'react';
import useAction from '../context/useActions';

/**
 * This is the basic docs for this component
 * @param {Object} props
 * @param {String} props.title This is the title on the h1 tag
 */
const Main = ({ Title = 'NotDefined' }) => {
  const { state, consoleTest, increase } = useAction();
  const { count } = state;

  return (
    <>
      <h1>{Title}</h1>
      <p>{count}</p>
      <button onClick={consoleTest}>Click-me</button>
      <button onClick={() => increase(1)}>Increase</button>
    </>
  );
};

export default Main;
