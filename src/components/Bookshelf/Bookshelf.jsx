import React, { useState } from 'react'
import axios from 'axios'
import * as ls from 'local-storage'

import BookTitleAuthor from './BookTitleAuthor'
import './Bookshelf.css'
import { useEffect } from 'react'

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([])
  const [favorites, setFavorites] = useState([])
  const user = ls.get('@user')

  const getBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/books')
      if (!!response.data) {
        setBookshelf(response.data)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getBooks()
  }, [])

  const addBook = (book) => {
    setBookshelf([...bookshelf, book])
  }

  const removeFromTBR = (book) => {
    const updatedTBR = bookshelf.filter((tbrBook) => tbrBook !== book)
    setBookshelf(updatedTBR)
  }
  const addToFavorites = async (book) => {
    try {
      if (!!user) {
        console.log('add to fav book', book)
        const res = await axios.post(
          `http://localhost:8080/user/book/${user.id}`,
          {
            book_id: book.book_id,
          }
        )
        setFavorites([...favorites, book])
      }
    } catch (error) {
      console.log('add to fav err', error)
    }
  }

  const removeFromFavorites = async (book) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/user/book/${user.id}/${book.book_id}`
      )
      if (response.status == '200') {
        setFavorites((prevFavourites) =>
          prevFavourites.filter((favBook) => favBook !== book)
        )
      }
    } catch (error) {}
  }

  const handleCreateBook = async (author, name) => {
    try {
      const response = await axios.post('http://localhost:8080/book', {
        author: author,
        name: name,
      })
      if (!!response.data) {
        console.log('book created')
        setBookshelf((prevBookshelf) => [...prevBookshelf, response.data])
      } else {
        console.log('wrong')
      }
      console.log('response', response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='container-bookshelf'>
      <h2 className='h2'>Add Books To Your Bookshelf</h2>
      <BookTitleAuthor handleCreateBook={handleCreateBook} />
      <h2 className='h2'>To Be Read</h2>
      {bookshelf
        .filter(
          (book) =>
            !!favorites.find((fav) => fav.book_id == book.book_id) == false
        )
        .map((book, index) => (
          <div classname='book-entry' key={index}>
            <span className='span'>
              Title: {book.title} Author: {book.author}
            </span>
            <button
              className='button-right'
              onClick={() => addToFavorites(book)}
            >
              Add to Favorites
            </button>
            <button className='button-left' onClick={() => removeFromTBR(book)}>
              Remove
            </button>
          </div>
        ))}
      <h2 className='h2'>Favorite Books</h2>
      {favorites.map((book, index) => (
        <div classname='favorite-books' key={index}>
          <span className='span'>
            Title: {book.title} Author: {book.author}
          </span>
          <button onClick={() => removeFromFavorites(book)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Bookshelf
