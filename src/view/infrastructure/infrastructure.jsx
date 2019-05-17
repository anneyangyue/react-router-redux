
import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import A from './a'
import B from './b'

class Infrastructure extends Component {
  render () {
    return <div>
      <div>Infrastructure</div>
      <Link to='/infrastructure'>A_a</Link>
      <Link to='/infrastructure/b'>B_a</Link>
      <Route path='/infrastructure' exact component={A} />
      <Route path='/infrastructure/b' component={B} />
    </div>
  }
}
export default Infrastructure
