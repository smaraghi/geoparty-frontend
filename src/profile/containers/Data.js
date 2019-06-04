import React from 'react'
import AvatarImage from '../components/AvatarImage'
import Bio from '../components/Bio'
import Stats from './Stats';
import { Segment, Grid } from 'semantic-ui-react'

const Data = () => {

  return (
    <Segment id="profile-data">
      <Grid>
        <Grid.Column width={3}>
          <AvatarImage />
        </Grid.Column>
        
        <Grid.Column width={7}>
          <Bio />
        </Grid.Column>
        
        <Grid.Column width={6}>
          <Stats />
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default Data
