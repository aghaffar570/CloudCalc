import React, { Component } from 'react'
// import { connect } from "react-redux"
import calculate from 'raabbajam-calculator'
// import { postOperation } from "../store";

export default class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      operation: '',
      result: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const operation = e.target.value;
    const result = calculate(operation);
    this.setState({ operation, result })

    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()

  }

  render() {
    return (
      <div>
        <form>
          hey
          <input type="text" value={this.state.operation} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}



