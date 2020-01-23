import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Main from './pages/Main';
import Help from './pages/Help';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>

        <Route path='/help'>
          <Help />
        </Route>

        <Route path='/'>
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
