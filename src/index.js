import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './context/context';

import Routes from './routes';

ReactDOM.render(
  <ContextProvider>
    <Routes />
  </ContextProvider>,
  document.getElementById('root'),
);

if (process.env.SERVICE_WORKER === 'true') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
}
