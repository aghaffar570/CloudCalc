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
      result: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleChange(e) {
    const operation = e.target.value;
    const result = calculate(operation);
    this.setState({ operation, result })

    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.postOperation('hey')
    console.log('clicked btn')
  }

  handleKeyPress(e) {
    e.preventDefault()
    if(e.key.toLowerCase() === 'enter'){
      console.log('key pressed', e.key, e.keyCode, e)
    }
  }

  render() {
    return (
      <div className="right">
        <form onSubmit={this.handleSubmit}>
        {/* onKeyPress={this.handleKeyPress} */}
          Math:
          <input type="text" value={this.state.operation} onChange={this.handleChange}/>
          <button>Answer</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    postOperation: () => dispatch(postOperation)
  }
}

export default connect(null, mapDispatch)(Calculator)





