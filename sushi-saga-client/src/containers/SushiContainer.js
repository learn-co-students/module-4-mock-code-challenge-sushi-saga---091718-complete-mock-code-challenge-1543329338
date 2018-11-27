import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const visibleSushis = getVisibleSushis(props.sushis, props.visible_sushi_count)
  return (
    <Fragment>
      <div className="belt">
        {
          visibleSushis.map(sushi => {
            return (
              <Sushi
                key={sushi.id}
                sushiID={sushi.id}
                name={sushi.name}
                imageUrl={sushi.img_url}
                price={sushi.price}
                isEaten={sushi.isEaten}
                eatSushi={props.eatSushi}
                balance={props.balance}/>
            )
          })
        }
        <MoreButton showMoreSushis={props.showMoreSushis} />
      </div>
    </Fragment>
  )
}

const getVisibleSushis = (sushis, count) => {
  return sushis.slice(count, count + 4)
}

export default SushiContainer
