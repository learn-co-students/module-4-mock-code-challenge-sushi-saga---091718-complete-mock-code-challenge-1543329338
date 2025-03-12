import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map((sush,index)=>{
            if(index<=(props.start+3) && index>=(props.start)){
              return <Sushi
                        key={sush.id}
                        eatSushi={props.handleEatSushi}
                        name={sush.name}
                        price={sush.price}
                        img={sush.img_url}
                        id={sush.id}
                        eaten={sush.eaten}/>
            }else{
              return null
            }
          })
        }
        <MoreButton handleMoreButton={props.moreHandle}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
// {for(let i = props.start; i<(props.start+3) ;i++){
//   <p>{props.sushis[i].name}</p>
// }
