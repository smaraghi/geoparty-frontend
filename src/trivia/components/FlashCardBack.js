import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Card } from 'semantic-ui-react'

const FlashCardBack = () => {
  const context = useContext(shopContext)

  return(
    <Card id="flash-card" >
      <Card.Content className='flashcard-question-container'>
        <Card.Description className='flashcard-question'>
          {context.activeQuestion.question}
        </Card.Description>
      </Card.Content>
      <Card.Content id='correct-answer-container'>
        <Card.Description id='correct-answer'>
          {context.activeQuestion.correct_answer}
        </Card.Description>
      </Card.Content>
  </Card>
  )
}

export default FlashCardBack