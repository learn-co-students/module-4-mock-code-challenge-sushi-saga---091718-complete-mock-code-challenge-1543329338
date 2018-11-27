import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, handleEatClick, eaten, firstSushi, handleMoreClick, lastSushi}) => {

  const fourSushi = sushis.filter( sushi => {
    return sushi.id >= firstSushi && sushi.id <= lastSushi
  })

  const displayedSushi = fourSushi.map(sushi => {
    return <Sushi
              sushi={sushi}
              key={sushi.id}
              handleEatClick={handleEatClick}
              eaten={eaten}/>
  })

  return (
    <Fragment>
      <div className="belt">
        {displayedSushi}
        <MoreButton
          handleMoreClick={handleMoreClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
