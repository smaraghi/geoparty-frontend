import React, { useContext } from 'react'
import shopContext from '../context/shop-context'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Country from '../country/containers/Country'
import Trivia from '../trivia/containers/Trivia'
import Profile from '../profile/containers/Profile';
import Login from '../login/containers/Login'
import CreateUser from '../login/components/CreateUser'
import { isEmpty } from 'lodash'

const MainContainer = props => {
  const context = useContext(shopContext)
  
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/country' component={Country} />
        <Route exact path='/trivia' component={Trivia} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path="/login" render = { (props) => {
          return isEmpty(context.user) ? <Login/> : <Redirect to="/profile"/>
        }} />
        <Route exact path='/create_account' component={CreateUser} />
      </Switch>
    </div>
  )
}

export default MainContainer
