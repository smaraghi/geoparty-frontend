import React from 'react'
import { Table } from 'semantic-ui-react'

const GeographyTable = props => {
   const { location, area, area_rank, comparison, border_countries, climate, terrain, lowest_point, highest_point, natural_resources } = props.countryData

  return (
    <div id='country-geography' attached='bottom'>
      <Table striped selectable >
        <Table.Body>
          <Table.Row>
            <Table.Cell>Area</Table.Cell>
            <Table.Cell>{area} sq km</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Area Rank</Table.Cell>
            <Table.Cell>{area_rank}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Location</Table.Cell>
            <Table.Cell>{location}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Comparison</Table.Cell>
            <Table.Cell>{comparison}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Border Countries</Table.Cell>
            <Table.Cell>{border_countries}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Climate</Table.Cell>
            <Table.Cell>{climate}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Terrain</Table.Cell>
            <Table.Cell>{terrain}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Lowest Point</Table.Cell>
            <Table.Cell>{lowest_point}m</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Highest Point</Table.Cell>
            <Table.Cell>{highest_point}m</Table.Cell>
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
