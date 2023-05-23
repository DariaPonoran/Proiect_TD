import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookTitleAuthor = ({ handleCreateBook }) => {
  const navigate = useNavigate()
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')

  // const handleAuthorChange = (e) => {
  // setAuthor(e.target.value)
  // }

  //const handleTitleChange = (e) => {
  //  setTitle(e.target.value)
  // }

  const handleAddBook = () => {
    handleCreateBook(author, title)
    setAuthor('')
    setTitle('')
  }
  return (
    <div>
      <input
        className='input'
        id='title'
        name='email'
        type='text'
        placeholder='Title'
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <input
        className='input'
        id='author'
        name='author'
        type='text'
        placeholder='Author'
        onChange={(event) => setAuthor(event.target.value)}
        value={author}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  )
}

export default BookTitleAuthor
