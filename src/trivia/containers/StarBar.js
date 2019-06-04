import React, { useContext } from 'react'
import Star from '../components/Star';
import shopContext from '../../context/shop-context';

const StarBar = () => {
  const context = useContext(shopContext)

  return(
    <div id="star-bar">
      {Array.from(Array(context.starAmount), (_, i) => <span key={i}><Star /></span>)}
    </div>
  )
}

export default StarBar
