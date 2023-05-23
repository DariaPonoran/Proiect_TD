import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as ls from 'local-storage'

import './Login.css'
function Login({ onLogin }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const onFirstLoad = async () => {
    try {
      const user = ls.get('@user')
      console.log('local storage user', user)
      const response = login(user.email, user.password)
      console.log('usef', response)
      if (!!response) {
        navigate('/home')
      }
    } catch (error) {}
  }

  useEffect(() => {
    onFirstLoad()
  }, [])

  const handleSubmit = async (event) => {
    console.log('handleSubmit ran')
    event.preventDefault()
    const user = await login(email, password)
    if (!!user) {
      ls.set('@user', user)
      navigate('/home')
    }
    setEmail('')
    setPassword('')
  }

  const login = async (email, password) => {
    try {
      const response = await axios.get(
        'http://localhost:8080/login/emailAndPassword',
        {
          params: {
            email: email,
            password: password,
          },
        }
      )
      return response.data[0]
    } catch (error) {
      console.log(error)
    }
  }
  const fetchUsers = async () => {
    try {
      const result = await axios.get('http://localhost:8080/users')
      console.log('result', result.data)
    } catch (error) {}
  }

  //useEffect(() => {
  // fetchUsers()
  // }, [])
  // useEffect(() => {
  //   getUser()
  // }, [])

  return (
    <div className='container-login'>
      <div className='form'>
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
          <button className='btn' onClick={handleSubmit}>
            Login
          </button>
          <br />
          <button className='btn'>Forgot Password?</button>
          <br />
          <button className='btn' onClick={() => navigate('/register')}>
            Don't have an account? Sign Up
          </button>
          <h2>{message}</h2>
        </form>
      </div>
      <div className='drops'>
        <div className='drop drop-1'></div>
        <div className='drop drop-2'></div>
        <div className='drop drop-3'></div>
        <div className='drop drop-4'></div>
        <div className='drop drop-5'></div>
      </div>
    </div>
  )
}

export default Login
