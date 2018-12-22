import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchOperation } from '../store/calclog'

import '../styles/calclog.css'

const Calclog = ({ operations }) => {
  console.log(operations, 'LOADED FROM DB')
  const ops = operations.length ? operations.map( ops => {
    return (
      <p key={ops.id}>{ops.id}.  {ops.operation}  =  {ops.value}</p>
    )
  }) : null ;

  return (
    <div className="left">
      { ops }
    </div>
  )
}




const mapState = (state) => {
  console.log(state, 'STATE IN CALCLOG')
  return {
    operations: state.calclog
  }
}
const mapDispatch = (dispatch) => {
  return {
    getOperations: () => dispatch(fetchOperation)
  }
}

export default connect(mapState, mapDispatch)(Calclog)

