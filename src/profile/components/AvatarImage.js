import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import {Image} from 'semantic-ui-react'

const AvatarImage = () => {
  const context = useContext(shopContext)

  return (  
    <div id='profile-image'>
      <Image src={require(`../../images/${context.avatar}`)} alt="avatar"/>
    </div>
  )
}

export default AvatarImage
