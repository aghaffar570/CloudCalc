import React, { Component } from 'react'

export default class logItem extends Component {
  constructor(props) {
    super()
    this.state = {
      variable: ''
    }
    this.textInput = React.createRef();
  }

  handleChange = (e) => {
    const variable = e.target.value
    this.setState({ variable })
    console.log(this.state, 'sfjklasdf')
  }

  focus = (e) => {
    this.textInput.current.focus()
  }

  render() {
    console.log(this.props, 'ITEMMM')
    const { ops } = this.props
    return (
      <div>
        <p className="opList" onClick={this.focus}>
          {ops.id}.  {ops.operation}  =  {ops.result}
            <span className="variable-input">
              <input type="text" ref={this.textInput} onChange={this.handleChange}/>
            </span>
        </p>
      </div>
    )
  }
}

