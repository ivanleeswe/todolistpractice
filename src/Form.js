import React from 'react'

function Form(props) {

  return (
    <form onSubmit={e => {props.handleSubmit(e)}}>
      <input type="text" name="name" onChange={e => {props.handleChange(e)}}>
      </input>
      <input type="submit" value="Submit"> 
      </input>
    </form>
  )
}

export default Form;
