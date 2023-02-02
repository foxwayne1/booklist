import { useState } from 'react'
import BookEdit from './BookEdit'
import BooksContext from '../context/Books'
import useBooksContext from '../hooks/use-books-context'

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)

  const { deleteBookById } = useBooksContext()

  const handleDeleteClick = e => {
    deleteBookById(book.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={e => handleDeleteClick(e)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
