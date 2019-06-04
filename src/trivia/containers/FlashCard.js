import React, { useContext } from 'react'
import shopContext from '../../context/shop-context'
import FlashCardBack from '../components/FlashCardBack';
import FlashCardFront from './FlashCardFront';

const FlashCard = () => {
  const context = useContext(shopContext)

  return(
    context.showAnswer ?
    <FlashCardBack />
    :
    <FlashCardFront />
  )
}

export default FlashCard
