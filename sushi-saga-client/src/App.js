import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet.js'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    money: 100,
    sushiPage: 23,
    eatenSushiIds: []
  }

  moreSushi = () => {
    let newPage = (this.state.sushiPage + 1) * 4 >= this.state.sushis.length ? 0 : this.state.sushiPage + 1
    this.setState({sushiPage: newPage})
  }

  currentSushi = () => this.state.sushis.map( (sushi, index) => {
      if (index < 4) {
        return this.state.sushis[4 * this.state.sushiPage + index]
      } else {return null}
    }).filter(el => el !== null)

  eatSushi = id => {
    let newMoney
    let foundSushi
    let alreadyEaten
    let newSushis = this.state.sushis.map(sushi => {
      if (sushi.id === id ) {
        foundSushi = sushi
        if (foundSushi.eaten) {alreadyEaten = true}
        sushi.eaten = true
        newMoney = this.state.money - sushi.price
      }
      return sushi
    })
    if (alreadyEaten) {window.alert("You already ate this one!!");return null}
    if (foundSushi.price > this.state.money) {window.alert("Come back with more money!");return null}
    let sushiIds = [...this.state.eatenSushiIds, id]
    this.setState({sushis: newSushis, money: newMoney, eatenSushiIds: sushiIds}, () => console.log(this.state.eatenSushiIds))
  }

  addToWallet = value => this.setState({money: this.state.money + parseInt(value)})

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      sushis.forEach(sushi => sushi.eaten = false)
      this.setState({sushis: sushis})})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushi={this.currentSushi()} eatSushi={this.eatSushi} moreSushi={this.moreSushi}/>
        <Table money={this.state.money} eatenSushiIds={this.state.eatenSushiIds}/>
        <SushiWallet addToWallet={this.addToWallet}/>
      </div>
    );
  }
}

export default App;
