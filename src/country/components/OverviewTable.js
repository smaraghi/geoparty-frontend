import React from 'react'
import { Table } from 'semantic-ui-react'

const OverviewTable = props => {
  const { capital, population, continent, major_cities } = props.countryData 

  return(
    <div id='country-overview'>
      <Table striped selectable >
        <Table.Body>
          <Table.Row>
            <Table.Cell>Capital</Table.Cell>
            <Table.Cell>{capital}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Population</Table.Cell>
            <Table.Cell>{population}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Continent</Table.Cell>
            <Table.Cell>{continent}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Major Cities</Table.Cell>
            <Table.Cell>{major_cities}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default OverviewTable