import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'
import { getBooks } from '../../store/bookSlice'
import { booksList } from '../../store/bookSlice'

const Bookstore = () => {

  type bookReducer = {
    book: {
      books: booksList[],
      isLoading: boolean
    }
  }

  const bookState = useSelector((state: bookReducer) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <>
      <Navbar/>
    <Container >
      <h1>Book Store</h1>
      {bookState.book.isLoading ?
        <p>Loading ...</p> :
        (
          <p>Hello Mo'men</p>
        )
      }
      {
        bookState.book.books &&
        bookState.book.books.map((book) => (
          <p key={book.id}>{book.title}</p>
        ))
      }
    </Container>
    </>
  )
}

export default Bookstore