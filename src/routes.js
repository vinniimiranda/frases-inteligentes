import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Phrases from './pages/Phrases';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/phrases/:author_id' exact component={Phrases} />
      </Switch>
    </Router>
  );
}
