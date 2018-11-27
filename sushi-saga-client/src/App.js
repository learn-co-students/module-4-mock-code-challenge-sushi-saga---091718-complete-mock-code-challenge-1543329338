import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: []
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({sushis: data}, ()=>console.log('fetched sushis', this.state)))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} />
        <Table />
      </div>
    );
  }
}

export default App;
