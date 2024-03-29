import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import * as ls from 'local-storage'

import { AppProvider } from './context.'
import './index.css'
import Home from './pages/Home/screens/Home'
import About from './pages/About/About'
import BookList from './components/BookList/BookList'
import BookDetails from './components/BookDetails/BookDetails'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Update from './pages/Update/Upate'

const root = ReactDOM.createRoot(document.getElementById('root'))

const user = ls.get('@user')

root.render(
  <>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='bookshelf' element={<About />} />
            <Route path='book' element={<BookList />} />
            <Route path='/book/:id' element={<BookDetails />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </>
)
