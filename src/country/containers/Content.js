import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import Summary from '../components/Summary'
import ContentMenu from './ContentMenu'
import TableSwitch from './TableSwitch';
import Loading from '../../app/Loading.js'

const Content = (props) => {
  const [countryData, setCountryData] = useState({})
  const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      fetch(`http://localhost:3000/countries/${props.activeCountry}`)
      .then(res => res.json())
      .then(country => {
        setCountryData(country)
        setLoading(false)
      })
    }, [props.activeCountry])

  return(
    loading ?
    <Loading />
    :
    <div>
      <Title countryName={countryData.name} />
      <Summary countryData={countryData} />
      <ContentMenu />
      <TableSwitch countryData={countryData} />
    </div>
  )
}

export default Content
