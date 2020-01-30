import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Main from './pages/Main';
import Help from './pages/Help';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route component={Main} path='/' exact />
        <Route component={Help} path='/help' />
        <Route component={() => <h1>404</h1>} path='/*' />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
