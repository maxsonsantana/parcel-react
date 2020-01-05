import React from "react";
import AppContext from "../context/context";

const App = () => {
  const { state, dispatch } = React.useContext(AppContext);

  console.log(state);

  return (
    <>
      <h1>Teste</h1>
      <button onClick={() => dispatch({ type: "TEST", payload: "WORKING" })}>
        Click-me
      </button>
    </>
  );
};

export default App;
