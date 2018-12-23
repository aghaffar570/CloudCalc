import React, { Component } from 'react'
import { Calclog, Calculator } from './components'
import axios from 'axios'

import './styles/app.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operations: []
    }
  }

  componentDidMount() {
     axios.get('/api/calc')
    .then(res => res.data)
      .then(operations => {
        this.setState({ operations })
        console.log(operations, 'LOCATED IN APP COMPONENT')
      })
      .catch((err) => {
        console.log(err, 'DID NOT RETRIEVE FROM DB IN COMPT');
      });
  }


  addOperation = (newOperation) => {
    console.log(newOperation, 'new op ni APP')
    this.setState({ operations: [...this.state.operations, newOperation] })
    console.log(this.state, 'RErender!!')
  }

  deleteLog = () => {
    axios.delete('/api/calc')
    .then(res => res.data)
      .then(deletedOperation => {
        this.setState({ operations: [] })
        console.log(deletedOperation, ' dEll MPONENT')
      })
      .catch((err) => {
        console.log(err, 'DID NOT RETRIEVE FROM DB IN COMPT');
      });
  }

  render () {
    console.log('state upsate', this.props, this.state)
    return (
      <div className="container">
        <div className="left">
          <Calclog operations={this.state.operations} deleteLog={this.deleteLog}/>
        </div>
        <div className="right">
          <Calculator addOperation={this.addOperation}/>
        </div>
      </div>
    )
  }
}
