import React, {Component} from 'react'

const Form = ({addMoney, budget, handleInput, input}) => {

  return(
    <form onSubmit={(event) => addMoney(event, parseInt(input))}>
      <label>
        Add amount:
        <input
          type="number"
          onChange={(event) => handleInput(event.target.value)}/>
      </label>
        <input
          type="submit"
          value="Submit"
          />
    </form>
  )

}

export default Form
