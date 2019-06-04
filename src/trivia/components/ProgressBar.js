import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Progress } from 'semantic-ui-react'

const ProgressBar = () => {
  const context = useContext(shopContext)

  return(
    <div className="progress-bar-container">
      <Progress 
        id='progress-bar'
        percent={context.percentage} 
        active 
        progress 
        color='violet'
      />
    </div>
  )
}

export default ProgressBar
