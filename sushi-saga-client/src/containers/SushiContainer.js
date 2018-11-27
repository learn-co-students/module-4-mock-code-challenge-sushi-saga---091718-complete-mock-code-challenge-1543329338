import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const mapAllSushi = (props) => {
  return props.filteredSushi.map(sushi => {
    return <Sushi
      key={sushi.id}
      sushi={sushi}
      handleSushiClick={props.handleSushiClick}
      eaten={props.isEaten(sushi.id)}
    />
  })
}
const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {mapAllSushi(props)}
        <MoreButton handleMoreClick={props.handleMoreClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
