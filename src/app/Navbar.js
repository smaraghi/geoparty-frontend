import React, { useContext } from 'react'
import shopContext from '../context/shop-context'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { isEmpty } from 'lodash'

const Navbar = () => {
  const context = useContext(shopContext)

  return (
    !isEmpty(context.user) ?
    <Menu >
      <Link to='/'>
        <Menu.Item header id='navbar-logo-login'>
          GeoParty &nbsp;
          <Icon name='globe' />
        </Menu.Item>
      </Link>

      <Link to='/country'>
        <Menu.Item name='Country' />
      </Link>

      <Link to='/trivia'>
        <Menu.Item name='Trivia' />
      </Link>

      <Link to='/profile'>
        <Menu.Item name='Profile' />
      </Link>

      <Menu.Menu position='right'>
        <Link to='/login' onClick={context.logoutUser}>
          <Menu.Item name='Logout' />
        </Link>
      </Menu.Menu>
    </Menu>
    :
    <Menu>
      <Link to='/'>
        <Menu.Item header id='navbar-logo-logout'>
          GeoParty &nbsp;
          <Icon name='globe' />
        </Menu.Item>
      </Link>

      <Link to='/country'>
        <Menu.Item name='Country' />
      </Link>

      <Link to='/trivia'>
        <Menu.Item name='Trivia' />
      </Link>

      <Menu.Menu position='right'>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar
