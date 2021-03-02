import React from 'react'
import Item from './Item'

function FormList(props) {
  return (
    <div>
      {props.groceriesList.map(grocery => 
      <Item grocery={grocery} key={grocery.id}/>)}      
    </div>
  )
}

export default FormList
