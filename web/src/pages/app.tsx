import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import Calendar from './calendar';
import Setting from './setting';

import './app.scss';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact={true} from="/" to="/calendar" />
        <Route path="/calendar" exact={true} component={Calendar} />
        <Route path="/setting" exact={true} component={Setting} />
      </Switch>
    </Router>
  );
};

export default App;
