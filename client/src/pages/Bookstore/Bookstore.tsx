import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import BookContainer from '../../Components/Book/BookContainer'
import Navbar from '../../Components/Navbar/Navbar'
import { getBooks } from '../../store/bookSlice'
import { book } from '../../store/bookSlice'

const Bookstore = () => {

  type bookReducer = {
    book: {
      books: book[],
      isLoading: boolean,
      error : string | null
    }
  }

  const bookState = useSelector((state: bookReducer) => state.book)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <>
    {bookState.error &&
    <div className='alert alert-danger mb-0' role="alert">{bookState.error}</div>
    }
      <Navbar/>
    <Container >
      <h1>Book Store</h1>
      {/* {bookState.isLoading ?
        <p>Loading ...</p> :
        (
          <p>Hello Mo'men</p>
        )
      }
      {
        bookState.books &&
        bookState.books.map((book) => (
          <p key={book.id}>{book.title}</p>
        ))
      } */}
      <BookContainer/>
    </Container>
    </>
  )
}

export default Bookstore