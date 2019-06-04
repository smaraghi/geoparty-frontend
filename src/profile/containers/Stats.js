import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import StarBar from '../../trivia/containers/StarBar'
import { List } from 'semantic-ui-react'

const Stats = () => {
  const context = useContext(shopContext)

  const percentageCorrect = () => {
    return context.user.correct_answers ?
    (context.user.correct_answers / context.user.total_questions).toFixed(2) * 100
    :
    0
  }

  return(
    <div id='profile-stats'>
      <StarBar />
      <List divided>
        <List.Item>Rank: {context.starAmount}</List.Item>
        <List.Item>Total Questions: {context.user.total_questions}</List.Item>
        <List.Item>Percentage Correct: {percentageCorrect()}%</List.Item>
      </List>
    </div>
  )
}

export default Stats
