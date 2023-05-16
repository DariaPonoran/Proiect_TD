import React from 'react'

function Register() {
  return (
    <div class="container-login">
    <div class ="form">
    <form >
      <p>Welcome</p>
      <input type="email" placeholder="Email" /><br />
      <input type="password" placeholder="Password" /><br />
      <input type="password" placeholder="Confirm Password" /><br />
      <button className='btn'>Sign Up</button><br/>
    </form>
    </div>
    <div class="drops">
      <div class="drop drop-1"></div>
      <div class="drop drop-2"></div>
      <div class="drop drop-3"></div>
      <div class="drop drop-4"></div>
      <div class="drop drop-5"></div>
    </div>
  </div>
  )
}

export default Register