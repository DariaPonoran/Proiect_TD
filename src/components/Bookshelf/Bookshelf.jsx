import React, { useState } from 'react';
import BookTitleAuthor from './BookTitleAuthor';
import './Bookshelf.css'

const Bookshelf = () => {

    const [bookshelf, setBookshelf] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addBook = (book) => {
        setBookshelf([...bookshelf, book]);
    };

    const removeFromTBR = (book) => {
        const updatedTBR = bookshelf.filter((tbrBook) => tbrBook !== book);
        setBookshelf(updatedTBR);
      };
    const addToFavorites = (book) => {
        setFavorites([...favorites, book]);
      };

      const removeFromFavorites = (book) => {
        const updatedFavorites = favorites.filter((favBook) => favBook !== book);
        setFavorites(updatedFavorites);
      };

    return (
        <div className='container-bookshelf'>
        <h2 className='h2'>Add Books To Your Bookshelf</h2>
        <BookTitleAuthor addBook={addBook} />
        <h2 className='h2'>To Be Read</h2>
        {bookshelf.map((book, index) => (
          <div classname = 'book-entry' key={index}>
            <span className='span' >Title: {book.title} Author: {book.author}</span>
            <button className='button-right' onClick={() => addToFavorites(book)}>Add to Favorites</button>
            <button className='button-left' onClick={() => removeFromTBR(book)}>Remove</button>
          </div>
        ))}
        <h2 className='h2'>Favorite Books</h2>
        {favorites.map((book, index) => (
          <div classname = 'favorite-books'key={index}>
             <span className='span'>Title: {book.title} Author: {book.author}</span>
            <button onClick={() => removeFromFavorites(book)}>Remove</button>
          </div>
        ))}
      </div>
    );
}

export default Bookshelf