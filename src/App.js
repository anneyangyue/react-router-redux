import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './view/login/login'
import Application from './view/overview/application'
import Host from './view/overview/host'
import Analysis from './view/analysis/analysis'
import Infrastructure from './view/infrastructure/infrastructure'
import A from './view/infrastructure/a';
import B from './view/infrastructure/b';

class App extends Component {
  render () {
    // return <Router>
    //   <Switch>
    //     <Route exact path='/login' component={Login} />
    //     <Route path='/overview/application' component={Application} />
    //     <Route path='/overview/host' component={Host} />
    //     <Route path='/analysis' component={Analysis} />
    //     <Route path='/infrastructure' component={Infrastructure} />
    //   </Switch>
    // </Router>

    return <div>
      <Router>
        <Link to='/overview/application'>Application</Link>
        <Link to='/analysis'>Analysis</Link>
        <Link to='/infrastructure'>Infrastructure</Link>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/overview/application' component={Application} />
          <Route path='/overview/host' component={Host} />
          <Route path='/analysis' component={Analysis} />
          <Route path='/infrastructure' component={Infrastructure} />
        </Switch>
      </Router>
    </div>
  }
}

export default App
