import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Menu } from 'semantic-ui-react'

const ContentMenu = () => {
  const context = useContext(shopContext)

  return(
    <div>
      <Menu id='content-menu' tabular attached='top'>
        <Menu.Item name='overview' color='violet' active={context.activeItem === 'overview'} onClick={() => context.setActiveItem('overview')}/>
        <Menu.Item name='geography' color='violet' active={context.activeItem === 'geography'} onClick={() => context.setActiveItem('geography')}/>
        <Menu.Item name='people' color='violet' active={context.activeItem === 'people'} onClick={() => context.setActiveItem('people')}/>
      </Menu>
    </div>
  )
}

export default ContentMenu
