import { useContext } from 'react'
import BookShow from './BookShow'
import BooksContext from '../context/Books'
import useBooksContext from '../hooks/use-books-context'

const BookList = () => {
  const { books } = useBooksContext()

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
