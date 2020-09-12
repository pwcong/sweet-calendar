import React from 'react';
import {
  BrowserRouter as Router,
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
        <Route
          path="/"
          exact={true}
          render={() => <Redirect to="/calendar" />}
        ></Route>
        <Route path="/calendar" exact={true} component={Calendar} />
        <Route path="/setting" exact={true} component={Setting} />
      </Switch>
    </Router>
  );
};

export default App;
