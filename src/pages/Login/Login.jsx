import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import './Login.css'
function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = (event) => {
    console.log('handleSubmit ran')
    event.preventDefault()
    console.log('email', email)
    console.log('password', password)
    getUser(email, password)
    setEmail('')
    setPassword('')
  }
  async function getUser(email, password) {
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
      if (!!response.data.length) {
        console.log('login')
      } else {
        console.log('wrong')
      }
      console.log('response', response)
    } catch (error) {
      console.error(error)
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
          <button className='btn' onClick={handleSubmit}>
            Login
          </button>
          <br />
          <button className='btn'>Forgot Password?</button>
          <br />
          <button className='btn' onClick={() => navigate('/register') }>Don't have an account? Sign Up</button>
          <h2>{message}</h2>
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

export default Login
