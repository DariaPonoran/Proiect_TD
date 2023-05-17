import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Login.css'
function Login({ onLogin }) {
  const fetchUsers = async () => {
    try {
      const result = await axios.get('http://localhost:8080/users')
      console.log('result', result.data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div class='container-login'>
      <div class='form'>
        <form>
          <p>Welcome</p>
          <input type='email' placeholder='Email' />
          <br />
          <input type='password' placeholder='Password' />
          <br />
          <button className='btn'>Login</button>
          <br />
          <button className='btn'>Forgot Password?</button>
          <br />
          <button className='btn'>Don't have an account? Sign Up</button>
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
