import React from 'react'
import { Item } from 'semantic-ui-react'

const PreviousQuestionItem = props => {

  const fillColor = () => {
    return props.question.correct ? "blue" : "red"
  }

  return (
    <Item>
      <Item.Content >
        {props.num}. {props.question.question}
        <Item.Content style={{color: fillColor()}}>
        <br/>
          {props.question.correct_answer}
        </Item.Content>
      </Item.Content>
    </Item>
  )
}

export default PreviousQuestionItem
