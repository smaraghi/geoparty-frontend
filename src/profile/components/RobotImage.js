import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Grid, Image, Card } from 'semantic-ui-react'

const RobotImage = (props) => {
  const context = useContext(shopContext)

  const saveAvatar = (robot) => {
    fetch(`http://localhost:3000/users/${context.user.id}`, {
      method: 'PATCH',
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        avatar: robot
      })
    })
  }

  return(
    <Grid.Column width={4} >
      <Card id='robot-image-card' 
        onClick={() => {
          context.setAvatar(`Robot-${props.num}.png`)
          saveAvatar(`Robot-${props.num}.png`)
        }}
      >
      <Image id='robot-image' src={require(`../../images/Robot-${props.num}.png`)} alt="robot"/>
      </Card> 
    </Grid.Column>
  )
}

export default RobotImage