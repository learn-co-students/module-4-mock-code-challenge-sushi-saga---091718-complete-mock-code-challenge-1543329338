import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {

  state = {
    startingIndex: 0,
    endingIndex: 4
  }

  renderSushis = ()=>{
    return this.props.sushis.slice(this.state.startingIndex, this.state.endingIndex).map((sushi)=>{
      return <Sushi addPlateToTable={this.props.addPlateToTable} key={sushi.id} id={sushi.id} name={sushi.name} img={sushi.img_url} price={sushi.price}/>}
    )
  }
  getFourMore = ()=>{
    this.setState({
      startingIndex: this.state.startingIndex+4,
      endingIndex: this.state.endingIndex+4
    })
  }



  render(){
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushis()
          }
          <MoreButton getFourMore={()=>this.getFourMore()}/>
        </div>
      </Fragment>
    )
  }

}

export default SushiContainer
