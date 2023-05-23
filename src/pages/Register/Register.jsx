import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConffirmation, setPasswordConffirmation] = useState('')
  const handleSubmit = (event) => {
    console.log('handleSubmit ran')
    event.preventDefault()
    console.log('email', email)
    console.log('password', password)
    console.log('passwordConffirmation', passwordConffirmation)
    createUser(email, password, passwordConffirmation)
    setEmail('')
    setPassword('')
    setPasswordConffirmation('')
  }
  async function createUser(email, password, passwordConffirmation) {
    try {
      const response = await axios.post('http://localhost:8080/signin', {
        email: email,
        password: password,
        passwordConffirmation: passwordConffirmation,
      })
      if (!!response.data.length) {
        console.log('signin')
      } else {
        console.log('wrong')
      }
      console.log('response', response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div class='container-login'>
      <div class='form'>
        <form>
          <p>Welcome</p>
          <input
            id='email'
            name='email'
            type='text'
            placeholder='Email'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <br />
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <br />
          <input
            id='passwordConffirnmation'
            name='passwordConffirmation'
            type='password'
            placeholder='Confirm Password'
            onChange={(event) => setPasswordConffirmation(event.target.value)}
            value={passwordConffirmation}
          />
          <br />
          <button className='btn' onClick={handleSubmit}>
            Sign Up
          </button>
          <br />
        </form>
      </div>
      <div class='drops'>
        <div class='drop drop-1'></div>
        <div class='drop drop-2'></div>
        <div class='drop drop-3'></div>
        <div class='drop drop-4'></div>
        <div class='drop drop-5'></div>
      </div>
    </div>
  )
}

export default Register
