
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hostAction} from '../../action/host'

class Host extends Component {
  go () {
    this.props.history.push('/overview/application')
  }
  render () {
    return <div>
      <span>{this.props.testVal}</span>
      <span onClick={this.props.reduce}>-</span>
      <span onClick={this.go.bind(this)}>go</span>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    testVal: state.testVal
  }
}

function mapDispatchToProps (dispatch) {
  return {reduce: () => dispatch(hostAction)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Host)
