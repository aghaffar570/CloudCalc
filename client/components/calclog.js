import React, { Component } from 'react'
import LogItem from "./logItem";

import '../styles/calclog.css'

export default class Calclog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      variable: ''
    }

  }

  handleChange = (e) => {
    const variable = e.target.value
    this.setState({ variable })
    console.log(this.state)
  }


  render () {
    const { operations, deleteLog, updateVariable } = this.props
    console.log(operations, 'LOADED FROM state calclog')
    const ops = operations.length
      ? operations.map( ops => <LogItem key={ops.id} ops={ops}/> )
      : <p className="opList"></p> ;
    const deleteLogItems = ops.length ? (
      <button className="delete-btn" onClick={deleteLog}>Delete Log</button>
    ) : null ;
    const updateVar = ops.length ? (
      <button className="update-btn" onClick={updateVariable}>Update Variables</button>
    ) : null ;
    return (
      <div className="left">
        { ops }
        { deleteLogItems } { updateVar }
      </div>
    )
  }
}

