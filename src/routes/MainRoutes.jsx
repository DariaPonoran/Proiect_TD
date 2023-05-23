import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/screens/Home'
import About from '../pages/About/About'
import Blog from '../pages/Blog/screens/Blog'
import SignUp from '../pages/Signup/screens/Signup'
import Navbar from '../components/Navbar/Navbar'
import Login from '../pages/Login/Login'
import Update from '../pages/Update/Upate'

const MainRoutes = () => {
  const [token, setToken] = React.useState(null);

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login onLogin={handleLogin}/>} />
        <Route path='/bookshelf' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </Router>
     <Navigation token={token} onLogout={handleLogout} />
     </>
  )
}

export default MainRoutes

