import { useContext } from 'react'
import BookShow from './BookShow'
import BooksContext from '../context/Books'

const BookList = () => {
  const { books } = useContext(BooksContext)

  const renderBooks = books.map(book => {
    return <BookShow key={book.id} book={book} />
  })

  return (
    <div>
      <div className='book-list'>{renderBooks}</div>
    </div>
  )
}

export default BookList
