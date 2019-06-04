import React, { useState } from 'react'
import { List } from 'semantic-ui-react'
import SidebarItem from '../components/SidebarItem'
import countryData from '../../data/countryData'
import Filter from '../components/Filter';

const Sidebar = props => {
  const [text, setText] = useState('')

  const filteredCountries = () => {
    return countryData().filter(c => c.name.toLowerCase().includes(text.toLowerCase()))
  }

  return(
    <div id='country-sidebar'>
    <Filter setText={setText}/>
    <List divided animated>
      {filteredCountries().map((country, i) => <SidebarItem key={i} country={country} setActiveCountry={props.setActiveCountry}/>)}
    </List>
    </div>
  )
}

export default Sidebar
