import React from 'react'
import { List, Flag } from 'semantic-ui-react'

const SidebarItem = props => {
  return(
    <List.Item id="country-sidebar-item" onClick={() => props.setActiveCountry(props.country.name)}>
      <Flag name={props.country.flag}/>
      <span>{props.country.name}</span>
    </List.Item>
  )
}

export default SidebarItem
