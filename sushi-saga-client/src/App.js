import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      currentSushi:0,
      activeSushi:[],
      sushi:[]
    }
  }

  componentDidMount(){
    fetch(API).then((data) => data.json()).then(sushiList => this.setSushi(sushiList))
  }

  setSushi = (sushiIn) => {
    this.setState({
      sushi:sushiIn
    },this.getMoreSushi)
  }

  getMoreSushi = () => {
    let temp = this.state.sushi.slice(this.state.currentSushi,this.state.currentSushi+4)
    temp[0].eaten = false
    temp[1].eaten = false
    temp[2].eaten = false
    temp[3].eaten = false

    this.setState({
      activeSushi:temp,
      currentSushi:(this.state.currentSushi + 4)
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.activeSushi}  onMoreSushi={this.getMoreSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;
