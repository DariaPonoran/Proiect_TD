import React, { useState } from 'react';

const BookTitleAuthor = ({ addBook }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');


  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleAddBook = () => {
    addBook({ author, title });
    setAuthor('');
    setTitle('');
  }
  return (
    <div>
      <input className='input'
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input className='input'
        type="text"
        placeholder="Author"
        value={author}
        onChange={handleAuthorChange}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookTitleAuthor;