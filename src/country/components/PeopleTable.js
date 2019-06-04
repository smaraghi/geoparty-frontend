import React from 'react'
import { Table } from 'semantic-ui-react'

const GeographyTable = props => {
   const {  population, population_rank, nationality, languages, religions, natural_resources } = props.countryData

  return (
    <div id='country-geography' attached='bottom'>
      <Table striped selectable >
        <Table.Body>
          <Table.Row>
            <Table.Cell>Population</Table.Cell>
            <Table.Cell>{population}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Population Rank</Table.Cell>
            <Table.Cell>{population_rank}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Nationality</Table.Cell>
            <Table.Cell>{nationality}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Languages</Table.Cell>
            <Table.Cell>{languages}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Religions</Table.Cell>
            <Table.Cell>{religions}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Natural Resources</Table.Cell>
            <Table.Cell>{natural_resources}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default GeographyTable
