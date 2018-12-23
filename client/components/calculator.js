import React, { Component } from 'react'
import calculate from 'raabbajam-calculator'
import axios from 'axios'

import '../styles/calculator.css'

export default class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      operation: '',
      result: ''
    }
  }

  handleChange = (e) => {
    const operation = e.target.value;
    const result = `${calculate(operation)}`;
    this.setState({ operation, result })
    console.log(this.state, operation, result)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(!Number.isNaN(this.state.result)) {
      axios.post('/api/calc', this.state)
      .then(res => res.data)
      .then(newOperation => {
        console.log('AFTER POST', newOperation)
        this.props.addOperation(newOperation)
      });
    }
    this.setState({
      operation: '',
      result: ''
    })
    console.log('clicked btn', this.state)
  }

  render() {
    return (
      <div className="right">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="calc">Calculate: </label>
          <input id="clac" type="text" value={this.state.operation} onChange={this.handleChange}/>
          <button>Answer</button>
        </form>
      </div>
    )
  }
}
