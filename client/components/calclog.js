import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchOperation } from '../store/calclog'

class Calclog extends Component {
  // componentDidMount() {
  //   this.props.getOperations()
  // }

  render() {
    const operations = this.props.operations
    console.log(operations, 'sadfasf')
    return (
      <div>
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

