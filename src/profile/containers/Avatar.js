import React from 'react'
import RobotImage from '../components/RobotImage';
import { Segment, Header, Grid } from 'semantic-ui-react'

const Avatar = () => {
  return(
    <Segment id="avatar-options">
      <Header>Edit Avatar</Header>
      <Grid>
        {Array.from(Array(8), (_, i) => <RobotImage key={i} num={i + 1}/>)}
      </Grid>
    </Segment>
  )
}

export default Avatar
