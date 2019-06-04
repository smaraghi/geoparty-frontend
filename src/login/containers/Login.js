import React, { useContext, useState } from 'react'
import shopContext from '../../context/shop-context'
import { Link } from 'react-router-dom'
import { Segment, Form, Button } from 'semantic-ui-react'

const Login = () => {
  const context = useContext(shopContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return(
    <Segment>
      <Form onSubmit={() => context.authenticatingUser(username, password)} size="mini" key="mini">
        <Form.Group widths="equal">
          <Form.Input
            label="username"
            placeholder="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Form.Input
            type="password"
            label="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button type="submit" color='violet'>Login</Button>
        <Link to="/create_account"><Button color='violet' floated="right" >Create New Account</Button></Link>
      </Form>
    </Segment>
  )
}

export default Login
