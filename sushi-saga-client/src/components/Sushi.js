import React from 'react'

const showEaten = (props) => {
  if (props.eaten === false) {
    return props.sushi.img_url
  } else {
    return ""
  }
}

const Sushi = (props) => {
  return (
    <div key={props.id} className="sushi">
      <div className="plate"
           onClick={() => props.handleSushiClick(props.sushi.id)}>
        {<img src={showEaten(props)} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
