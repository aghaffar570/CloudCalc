import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchOperation } from '../store/calclog'

import '../styles/calclog.css'

class Calclog extends Component {
  // componentDidMount() {
  //   this.props.getOperations()
  // }


  render() {
    const operations = this.props.operations
    console.log(operations, 'sadfasf')
    return (
      <div className="left">
      hellow
        {
          operations &&
          operations.map( item => {
            <p>{item.operation}</p>
          })
        }
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
    getOperations: () => dispatch(fetchOperation)
  }
}

export default connect(mapState, mapDispatch)(Calclog)

