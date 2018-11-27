import React, { Component } from 'react'

export default class SushiWallet extends Component {
  state = {
    value: 10
  }

  handleChange = (event) => this.setState({value: event.target.value})
  render() {
    return (
      <span className="wallet" style={{float: "left;", display:"inline;"}}>
      <label>Purchase more SushiBucks</label><br></br>
      <input type="number" value={this.state.value} onChange={this.handleChange}></input>
      <button onClick={() => this.props.addToWallet(this.state.value)}>Add Value</button>
      </span>
    )
  }
}
