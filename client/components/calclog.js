import React, { Component } from 'react'

import '../styles/calclog.css'

export default class Calclog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      variable = ''
    }
  }

  // handleChange = (e) => {
  //   // const variable = e.target.value
  //   // this.setState({ variable })
  //   // console.log(this.state)
  // }

  render () {
    const { operations, deleteLog } = this.props
    console.log(operations, 'LOADED FROM state calclog')
    const ops = operations.length ? operations.map( ops => {
      return (
        <p key={ops.id} className="opList">
        {ops.id}.  {ops.operation}  =  {ops.result}
          <span className="variable-input">
            <input type="text" name='variable'/>
          </span>
        </p>
      )
    }) : <p className="opList"></p> ;
    const deleteLogItems = ops.length ? (
      <button onClick={deleteLog}>Delete Log History</button>
    ) : null ;
    return (
      <div className="left">
        { ops }
        { deleteLogItems }
      </div>
    )
  }
}

