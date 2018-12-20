import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Pokemon,
  Home
} from './components'

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/pokemon' component={Pokemon}/>
          <Route component={Home}/>
        </Switch>
      </div>
    )
  }
}

const mapState = state => {
  return {

  }
}

const mapDispatch = dispatch => {
  return {

  }
}

export default connect(mapState, mapDispatch)(Routes)

Routes.propTypes = {
  //props : PropTypes.[type].[extraValidators]
}
