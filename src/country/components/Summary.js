import React from 'react'
import { Segment } from 'semantic-ui-react'

const Summary = props => {

  return (
    <Segment id='country-summary'>
       {props.countryData.profile}
    </Segment>
  )
}

export default Summary
