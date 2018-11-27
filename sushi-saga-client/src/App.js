import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    start:0,
    sushis:[],
    balance:100
  }
  componentDidMount(){
    fetch(API).then(resp=>resp.json())
    .then(data=>{
      this.setState({
        sushis:data.map((impSushi)=>{
          return{eaten:false,...impSushi}

        })
      })
    })
  }
  handleMoreButton =()=>{
    if(this.state.start+4>=this.state.sushis.length){
      this.setState(()=>{
        return {start:0}
      })
    }else{
      this.setState(()=>{
        return {start:(this.state.start+4)}
      })
    }
  }
  handleEatSushi = (id,price)=>{
    if(this.state.balance-price>=0){
      /*------------I Know this isnt correct but currently works---------------------------------*/
      //Unsure of how to do this with set state
      // this.state.sushis[id-1].eaten=true
      /*------------I Know this isnt correct but currently works---------------------------------*/

      let newSushis = this.state.sushis.map((sushi)=>{
        if (sushi.id===id){
          return {...sushi,eaten:true}
        }else{
          return sushi
        }
      })
      // attempt using setState
      //produces full array with duplicate element instead of taking the specific element
      // this.setState(()=>{
      //   return{sushis:[this.state.sushis[id-1].eaten=true,...this.state.sushis]}
      // })
      this.setState(()=>{
        return {balance: (this.state.balance-price), sushis:newSushis}
      })
    }
  }
  render() {
    return (
      <div className="app">
        <SushiContainer
            handleEatSushi={this.handleEatSushi}
            moreHandle={this.handleMoreButton}
            start={this.state.start}
            sushis={this.state.sushis}/>
        <Table sushis={this.state.sushis} balance={this.state.balance}/>
      </div>
    );
  }
}

export default App;
