import React from 'react'

const MoreButton = ({handleMoreClick}) => {

    return <button onClick={() => handleMoreClick()}>
            More sushi!
          </button>
}

export default MoreButton
