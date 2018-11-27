import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  state = {
    eatenSushi: []
  }

  handleClick = (e) => {
    console.log('in handleClick',e.target);
    console.log('is this the sushi clicked?',this.props.sushis.find((s)=> s.id == e.target.id));
    let clickedSushi = this.props.sushis.find((s)=> s.id == e.target.id)
    // this.setState({eatenSushi: })
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  generateSushis = (props) => {
    console.log('in generateSushis',props.sushis)
    // let randIndex = Math.floor(Math.random() * Math.floor(95))
    let randIndex = this.getRandomInt(0, props.sushis.length-5)
    let platesIndex = randIndex+4
    // console.log('random index of sushi array',randIndex);
    let slicedArray = props.sushis.slice(randIndex, platesIndex).map((sushi) =>
        <Sushi key={sushi.id} id={sushi.id} name={sushi.name} img={sushi.img_url} price={sushi.price} handleClick={this.handleClick}/>)

    // console.log('sliced array',slicedArray);
    return slicedArray
  }


  render(){
    return (
      <Fragment>
      <div className="belt">
      {
        this.generateSushis(this.props)
      }
      <MoreButton />
      </div>
      </Fragment>
    )
  }
}


// CHANGED CONTAINER FROM FUNCTIONAL COMPONENT TO CLASS COMPOENT TO TRACK THE SUSHI'S CLICKED
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }

// const GenerateSushis = (props) => {
//   console.log('in generateSushis',props.sushis)
//   // let randIndex = Math.floor(Math.random() * Math.floor(95))
//   let randIndex = getRandomInt(0, props.sushis.length-5)
//   let platesIndex = randIndex+4
//   console.log('random index of sushi array',randIndex);
//   let slicedArray = props.sushis.slice(randIndex, platesIndex).map((sushi) =>
//       <Sushi key={sushi.id} id={sushi.id} name={sushi.name} img={sushi.img_url} price={sushi.price}/>)
//
//   console.log('sliced array',slicedArray);
//   return slicedArray
// }

// const SushiContainer = (props) => {
//
//   return (
//     <Fragment>
//     <div className="belt">
//     {
//       GenerateSushis(props)
//     }
//     <MoreButton />
//     </div>
//     </Fragment>
//   )
// }

export default SushiContainer
