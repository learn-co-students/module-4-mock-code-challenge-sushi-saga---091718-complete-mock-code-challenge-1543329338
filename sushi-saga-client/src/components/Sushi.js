import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log('in Sushi', props);
  return (
    <div className="sushi">
      <div className="plate"
           onClick={props.handleClick} id={props.id}>
        {
          /* Tell me if this sushi has been eaten! */
          false ?
            null
          :
            <img src={props.img} width="100%" id={props.id}/>
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi
