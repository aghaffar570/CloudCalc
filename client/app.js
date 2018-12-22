import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles/app.css'

import { Calclog, Calculator } from './components'
import { fetchOperation } from './store/calclog'

class App extends Component {

  componentDidMount() {
    this.props.getOperations()
  }

  render () {
    console.log('state upsate', this.props)
    return (
      <div className="container">
        <div className="left">
          <Calclog/>
        </div>
        <div className="right">
          <Calculator />
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    operations: state.operation
  }
}
const mapDispatch = (dispatch) => {
  return {
    getOperations: () => dispatch(fetchOperation())
  }
}

export default connect(mapState, mapDispatch)(App)
