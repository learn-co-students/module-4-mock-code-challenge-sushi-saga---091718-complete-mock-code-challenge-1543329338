import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => clickPlate(props)}>
        {
          /* Tell me if this sushi has been eaten! */
          props.isEaten ?
            null
          :
            <img src={props.imageUrl} width="100%" alt="error" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

const clickPlate = (props) => {
  if ((!props.isEaten) && (props.balance - props.price >= 0)) {
    props.eatSushi(props)
  }
}

export default Sushi
