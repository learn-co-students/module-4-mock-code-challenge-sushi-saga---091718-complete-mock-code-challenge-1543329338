import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis:[],
    eatenSushi:{},
    countEaten:[]
  }

  componentDidMount(){
    fetch(API)
    .then(r=>r.json())
    .then(json=>{
      this.setState({
        sushis: json
      })
    })
  }

  addPlateToTable =(props)=>{
    this.setState({
      eatenSushi:{
        name: props.name,
        id: props.id,
        price: props.price
      },
      countEaten: this.state.myArray.push('new value')
    })
  }



  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} addPlateToTable={this.addPlateToTable} />
        <Table countEaten={this.state.countEaten} sushiPrice={this.state.eatenSushi.price} />
      </div>
    );
  }
}

export default App;
