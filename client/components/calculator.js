import React, { Component } from 'react'
import { connect } from "react-redux"
import { postOperation } from "../store/calculator"
import calculate from 'raabbajam-calculator'

import '../styles/calculator.css'

class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      operation: '',
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const operation = e.target.value;
    const value = calculate(operation);
    this.setState({ operation, value })

    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    if(!Number.isNaN(this.state.value)) {
      console.log('yay')
      this.props.postOperation(this.state)
    }
    console.log('clicked btn', this.state, typeof this.state.value)
  }

  render() {
    return (
      <div className="right">
        <form onSubmit={this.handleSubmit}>
          Calculate:
          <input type="text" value={this.state.operation} onChange={this.handleChange}/>
          <button>Answer</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    postOperation: (state) => dispatch(postOperation(state))
  }
}

export default connect(null, mapDispatch)(Calculator)





