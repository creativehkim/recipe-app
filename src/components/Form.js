import React from 'react'

const Form = (props) => {
  return (
    <form onSubmit={props.getRecipes}>
      <input type="text" name='recipeName' />
      <button>Search</button>
    </form>
  )
}

export default Form
