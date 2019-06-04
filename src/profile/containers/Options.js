
import React, { useState, useContext } from 'react'
import shopContext from '../../context/shop-context'
import { Segment, Button, Form, Header } from 'semantic-ui-react'

const Options = () => {
  const context = useContext(shopContext)
  const [editingProfile, setEditingProfile] = useState(false)
  const [bio, setBio] = useState(context.user.bio)

  const handleSubmit = () => {
    fetch(`http://localhost:3000/users/${context.user.id}`, {
      method: "PATCH",
      headers:{"Content-Type":"application/json", "Accept": "application/json"},
      body:JSON.stringify({
        bio: bio
    	})
    })
  }

  const handleBioChange = (e) => {
    if (e.target.value.length <= 150) {
      setBio(e.target.value)
    }
  }

  return (
    <Segment id="profile-options">
      {!editingProfile ?
      <div id='edit-profile-button-container'>
        <Button id='edit-profile-button' color='violet' onClick={() => setEditingProfile(true)}>Edit Profile</Button>
      </div>
      :
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          setEditingProfile(false)
          context.setBio(bio)
          handleSubmit()
        }}
      >
        <Header>Bio</Header>
        <Form.TextArea
          name='bio'
          placeholder={context.user.bio}
          onChange={handleBioChange}
          value={bio}
        />
      <Button color='violet' type='submit'>Submit</Button>
      </Form>
      }
    </Segment>
  )
}

export default Options
