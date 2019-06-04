import React, { useEffect, useContext } from 'react'
import Options from '../components/Options';
import FlashCard from './FlashCard';
import PreviousQuestions from './PreviousQuestions'
import shopContext from '../../context/shop-context';
import ProgressBar from '../components/ProgressBar';
import StarBar from './StarBar';
import Loading from '../../app/Loading'
import '../../css/Trivia.css'
import { Image } from 'semantic-ui-react'

const Trivia = () => {
  const context = useContext(shopContext)

  useEffect( () => {
    context.fetchQuestions()
  }, [])

  return (
    context.loading ?
    <Loading />
    :
    <div id='trivia-container'>
      <ProgressBar />
      <StarBar />
      <FlashCard />
      <Options />
      <PreviousQuestions />
      <Image id='globe-image-1' src={require('../../images/globe.jpeg')} alt='globe' />
      <div id='screen-filler'></div>
    </div>
  )
}

export default Trivia
