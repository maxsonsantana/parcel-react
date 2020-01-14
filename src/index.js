import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './context/context';

import App from './src/App';

ReactDOM.render(
  <ContextProvider>
    <App title={'Hello World'} />
  </ContextProvider>,
  document.getElementById('root'),
);
