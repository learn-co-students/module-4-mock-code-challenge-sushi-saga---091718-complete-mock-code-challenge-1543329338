import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
const getSushis = fetch(API).then(r => r.json())

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible_sushi_count: 0,
      sushis: [],
      balance: 500,
      emptyPlates: 0
    }
  }

  componentDidMount() {
    getSushis
    .then(sushiData => {
      return sushiData.map(sushiObject => {
        let updatedObject = {...sushiObject}
        updatedObject.isEaten = false
        return updatedObject
      })
    })
    .then(sushiData => {
      this.setState({sushis: sushiData})
    })
  }

  showMoreSushis = () => {
    this.setState({
      visible_sushi_count: (this.state.visible_sushi_count + 4)
    })
  }

  eatSushi = (sushi) => {
    let updatedSushis = this.state.sushis
    let updatedSushi = {...updatedSushis[sushi.sushiID-1]}
    updatedSushi.isEaten = true
    updatedSushis[sushi.sushiID-1] = updatedSushi
    this.setState({
      sushis: updatedSushis,
      balance: (this.state.balance - sushi.price),
      emptyPlates: (this.state.emptyPlates + 1)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          visible_sushi_count={this.state.visible_sushi_count}
          showMoreSushis={this.showMoreSushis}
          eatSushi={this.eatSushi}
          balance={this.state.balance}  />
        <Table
          balance={this.state.balance}
          emptyPlates={this.state.emptyPlates} />
      </div>
    );
  }
}

export default App;
