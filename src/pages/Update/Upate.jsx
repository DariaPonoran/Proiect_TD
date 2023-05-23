import axios from 'axios'
import React, { useState } from 'react'
import * as ls from 'local-storage'

import './Update.css'

function Update() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const user = ls.get('@user')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Perform user details update logic here (e.g., make API call to update details)
    // Reset form
    try {
      const res = await axios.put(`http://localhost:8080/user/${user.id}`, {
        name,
        username,
      })
      if (res.status == '200') {
        console.log('update success')
      }
    } catch (error) {}
    setName('')
    setUsername('')
  }

  return (
    <div class='container-update'>
      <div class='form-update'>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='name'
              id='name'
              value={name}
              placeholder='Name'
              onChange={handleNameChange}
            />
          </div>
          <div>
            <input
              type='text'
              id='username'
              value={username}
              placeholder='Username'
              onChange={handleUsernameChange}
            />
          </div>
          <button className='btn' type='submit'>
            Update Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update
