import React from 'react'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'

const Loading = () => {
	return(
    <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>
    </Segment>
  )
}

export default Loading