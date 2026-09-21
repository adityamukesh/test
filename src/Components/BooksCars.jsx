import React from 'react'

function BooksCars({book, changeStatus}) {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Year: {book.year}</p>
      <p>Available: {book.available ? 'Yes' : 'No'}</p>
      <button onClick={() => changeStatus(book.id)}>
        {book.available ? 'Mark as Unavailable' : 'Mark as Available'}
      </button>
    </div>
  )
}

export default BooksCars