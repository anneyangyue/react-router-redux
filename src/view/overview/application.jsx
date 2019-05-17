
import React, {Component} from 'react'
import {applicationAction} from '../../action/application'
import {connect} from 'react-redux'


class Application extends Component {
  go () {
    this.props.history.push('/overview/host')
  }
  render () {
    let va = this.props
    console.log(va,'vavava')
    return <div>
      <span>testVal:{this.props.testVal}</span>
      <span onClick={this.props.add}>+</span>
      <span onClick={this.go.bind(this)}>go</span>
      <span>testVal:{this.props.reducersLogin.age}</span>
      <span onClick={this.props.addO}>+</span>
    </div>
  }
}

function mapStateToProps (state) {
  console.log(state,"sttt")
  return {
    testVal: state.testVal,
    reducersLogin: state.reducersLogin
  }
}

function mapDispatchToProps (dispatch) {
  return {
    add: () => dispatch(applicationAction),
    addO: () => dispatch(applicationAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)
