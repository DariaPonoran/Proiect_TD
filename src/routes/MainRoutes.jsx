import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/screens/Home'
import About from '../pages/About/About'
import Blog from '../pages/Blog/screens/Blog'
import SignUp from '../pages/Signup/screens/Signup'
import Navbar from '../components/Navbar/Navbar'

const MainRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default MainRoutes
