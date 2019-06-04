import React, { useContext } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import shopContext from '../../context/shop-context'

const Options = () => {
  const context = useContext(shopContext)

  const handleQuestionSkip = () => {
    if (!context.answered) {
      context.setCorrect(false)
      context.addPreviousQuestion(context.activeQuestion, false)
    } else {
      context.addPreviousQuestion(context.activeQuestion, context.correct)
    }
  }

  return(
    <div id='flashcard-option-buttons'>
        <br/>
        <Button id="previous-button" color="violet" onClick={() => context.setModalStatus(true)} >Previous Questions</Button>
        <Button id="next-button" color="violet" onClick={() => {
          handleQuestionSkip()
          context.setShowAnswer(false)
          context.setVisible(true)
          context.setAnswered(false)
          context.handleQuestionIndex()
        }}>Next Question</Button>
    </div>
  )
}

export default Options
