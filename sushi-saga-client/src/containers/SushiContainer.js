import React, { Fragment } from 'react'
import {Component} from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

export default class SushiContainer extends Component{

  constructor(props){
    super(props)
    console.log(this.props)
  }

  makeSushi(){
    console.log('Making Sushi')
    console.log(this.props.sushi)
    return this.props.sushi.map(sushi=> (<Sushi sushi={sushi} key={sushi.id} onEaten={this.onEatSushi}/>))
  }

  onEatSushi = (sushiIn) => {
    console.log(this)
    this.props.sushi.find(function(element){
       return element.id == sushiIn.id
    }
    ).eaten = true;
    console.log('You ate me')
  }

  render(){
    return (
      <Fragment>
        <div className="belt">

            {this.makeSushi()}
            /*
              Render Sushi components here!
             */
          <MoreButton onMoreSushi={this.props.onMoreSushi} />
        </div>
      </Fragment>
    )
  }
}
