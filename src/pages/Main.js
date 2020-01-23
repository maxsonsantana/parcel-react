import React, { useContext } from 'react';
import AppContext from '../context/context';

/**
 * This is the basic docs for this component
 * @param {Object} props
 * @param {String} props.title This is the title on the <h1> tag
 */
const Main = ({ Title = 'NotDefined' }) => {
  const { state, dispatch } = useContext(AppContext);
  const { count } = state;

  return (
    <>
      <h1>{Title}</h1>
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

export default Main;
