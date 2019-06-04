import React from 'react'
import { Header } from 'semantic-ui-react'

const Title = (props) => {
  return(
    <Header id='country-header' as='h1'>
      {props.countryName}
    </Header>
  )
}

export default Title
