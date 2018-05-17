/*
  React Ethereal - 2018

  Main Content APP
*/

import React from 'react';
import {Route, Switch} from 'react-router';

/* rutes */
import PrivateRoute from './session/PrivateRoute.react';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div id="_chat-main">

      <Switch>
        <Route path="/welcome" component={Login}/>
        <PrivateRoute exact={true} path="/" component={Chat}/>
      </Switch>
    </div>)
  }
}

/* default export */
export default App;
