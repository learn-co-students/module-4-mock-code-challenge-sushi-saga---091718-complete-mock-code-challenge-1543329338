import React, { Fragment, Component } from 'react'

class Sushi extends Component {
  state = {
    eaten: null
  }

  handleEating=()=>{
    this.setState({
      eaten: true
    })
    this.props.addPlateToTable(this.props)
  }

render(){
  return (
    <div className="sushi">
      <div className="plate"
           onClick={this.handleEating}>
           {this.state.eaten ? null : <img src={this.props.img} width="100%" alt={this.props.name}/>}
      </div>
      <h4 className="sushi-details">
        {this.props.name} - ${this.props.price}
      </h4>
    </div>
  )
}

}

export default Sushi
