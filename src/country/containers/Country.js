import React, { useState } from 'react'
import Content from './Content';
import Sidebar from './Sidebar';
import { Grid } from 'semantic-ui-react'
import '../../css/Country.css'
import World from './World'

const Country = () => {
  const [activeCountry, setActiveCountry] = useState('World')

  return(
    <Grid>
      <Grid.Column width={3} >
        <Sidebar setActiveCountry={setActiveCountry}/>
      </Grid.Column>
      <Grid.Column width={13}>
        { activeCountry === 'World' ? 
        <World /> 
        :
        <Content activeCountry={activeCountry}/>
        }
      </Grid.Column>
    </Grid>
  )
}

export default Country
