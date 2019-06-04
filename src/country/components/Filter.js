import React from 'react'
import { Input } from 'semantic-ui-react'

const Filter = props => {
  return(
    <Input 
      id='country-filter'
      icon='search' 
      placeholder='Search Country' 
      onChange={(e) => props.setText(e.target.value)} 
    />
  )
}

export default Filter 