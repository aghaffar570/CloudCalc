import React, { Component } from 'react'

import '../styles/calclog.css'

const Calclog = ({ operations, deleteLog }) => {
  console.log(operations, 'LOADED FROM state calclog')
  const ops = operations.length ? operations.map( ops => {
    return (
      <p key={ops.id} className="opList">{ops.id}.  {ops.operation}  =  {ops.result}</p>
    )
  }) : <p className="opList"></p> ;

  return (
    <div className="left">
      { ops }
      <button onClick={deleteLog}>Delete Log History</button>
    </div>
  )
}

export default Calclog
