import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    allSushi: [],
    disposedSushiCount: null,
    eatenSushi: [],
    moneyToSpend: 100
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(json => this.setState({ allSushi: json }))
  }

  filteredSushi = () => {
    if (this.state.disposedSushiCount <= this.state.allSushi.length) {
        return this.state.allSushi.slice(this.state.disposedSushiCount,(this.state.disposedSushiCount + 4))
    } else {
      this.setState({ disposedSushiCount: null})
        return this.state.allSushi.slice(this.state.disposedSushiCount,(this.state.disposedSushiCount + 4))
    }
  }

  handleMoreClick = (event) => {
    this.setState({
      disposedSushiCount: (this.state.disposedSushiCount + 4)
    })
  }

  handleSushiClick = (id) => {
    let foundSushi = this.state.allSushi.find(sushi => sushi.id === id)
    let money = (() => this.state.moneyToSpend)()

    if (foundSushi.price < this.state.moneyToSpend){
      this.setState({
        eatenSushi: [...this.state.eatenSushi, foundSushi],
        moneyToSpend: (money - foundSushi.price)
      })
    }
  }

  isEaten = (id) => {
    if (this.state.eatenSushi.find(sushi => sushi.id === id)) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          filteredSushi={this.filteredSushi()}
          isEaten={this.isEaten}
          handleMoreClick={this.handleMoreClick}
          handleSushiClick={this.handleSushiClick}
        />
        <Table eatenSushi={this.state.eatenSushi} remaining={this.state.moneyToSpend} />
      </div>
    );
  }
}

export default App;
