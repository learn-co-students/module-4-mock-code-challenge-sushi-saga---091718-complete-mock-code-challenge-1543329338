import React, { Fragment } from 'react'

const Table = (props) => {
  const emptyArray = new Array(props.emptyPlates)

  const renderPlates = (array) => {
    let returnArray = []
    for (let index = 0; index < array.length; index++) {
      returnArray.push(<div className="empty-plate" style={{ top: -7 * index }}/>)
    }
    return returnArray
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.balance} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(emptyArray)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
