import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './containers/Form'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    firstSushi: 1,
    lastSushi: 4,
    budget: 200,
    input: null
  }

  componentDidMount(){
    fetch(API)
      .then(r => r.json())
      .then( sushis => {
        this.setState({
          sushis: sushis
        })
      })
  }

  handleEatClick = (sushi) => {
    if (!this.state.eaten.includes(sushi) && this.state.budget >= sushi.price) {
      this.setState(prevState => ({
        eaten: [...prevState.eaten, sushi],
        budget: this.state.budget - sushi.price
      }))
    }
  }

  handleMoreClick = () => {
    if (this.state.firstSushi === 97) {
      this.setState({
        firstSushi: 1,
        lastSushi: 4
      })
    } else {
      this.setState( prevState => ({
        firstSushi: prevState.firstSushi+4,
        lastSushi: prevState.lastSushi+4
      }))
    }
  }

  handleInput = (input) => {
    this.setState({
      input: input
    })
  }

  addMoney = (event, moneyInput) => {
    event.preventDefault()
    this.setState( prevState => ({
      budget: prevState.budget + moneyInput
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          handleEatClick={this.handleEatClick}
          eaten={this.state.eaten}
          firstSushi={this.state.firstSushi}
          lastSushi={this.state.lastSushi}
          handleMoreClick={this.handleMoreClick}/>
        <Table
          budget={this.state.budget}
          eaten={this.state.eaten}/>
        <Form
          addMoney={this.addMoney}
          budget={this.state.budget}
          handleInput={this.handleInput}
          input={this.state.input}/>
      </div>
    );
  }
}

export default App;
