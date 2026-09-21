import {useState} from 'react'
import booksDtata from "./DATA/books.json";
import BooksCars from './Components/BooksCars'


function App() {

  const [books, setBooks] = useState(booksDtata)
  const totalbooks = books.length;
  const availablebooks=books.filter(book => book.available).length;
  const unavailablebooks=books.filter(book => !book.available).length;
  const changeStatus=(id)=>{
    const updatedBooks=books.map(book=>{
      if(book.id===id){
        return {...book, available: !book.available}
      }
      return book;
    })
    setBooks(updatedBooks)
  }





  return (
    <div><h1>My Bookstore</h1>
    <p>
Total Books: {totalbooks}</p>
    <p>Available Books: {availablebooks}</p>
    <p>Unavailable Books: {unavailablebooks}</p>
    {availablebooks>0 && <p>We have books available for you!</p>}
    {availablebooks===0 && <p>Sorry, we are out of stock!</p>}

    <div>
      {books.map(book=><BooksCars key={book.id} book={book} changeStatus={changeStatus}/>)}
    </div>
    <p>
    </p>





    </div>
  )
}

export default App