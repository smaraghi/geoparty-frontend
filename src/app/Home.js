import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <div id='home-container'>
      <Segment id='home-blurb'>
				<p>GeoParty is a lightweight learning tool for users of all ages! Discover new and interesting facts about countries spanning the globe. Challenge yourself with an assortment of trivia questions and keep track of your progress. Compete with friends to answer the most correct questions and earn the greatest number of stars!</p>
			</Segment>
      <div id='home-map-container'>
        <Image id='home-map'  src={require('../images/world-map.jpg')} alt='world map' />
      </div>
      <Segment id='home-link-container'>
        <Link id='home-country-link' to='/country'><p>Explore The World</p></Link>
        <Link id='home-trivia-link' to='/trivia'>Test Your Skills</Link>
      </Segment>
    </div>
	)
}

export default Home 