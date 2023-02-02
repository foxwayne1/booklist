import { useState, useContext } from 'react'
import BooksContext from '../context/Books'

const BookCreate = () => {
  const [title, setTitle] = useState('')

  const { createBook } = useContext(BooksContext)

  const handleChange = event => {
    setTitle(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createBook(title)
    setTitle('')
  }

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Book Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}
export default BookCreate
