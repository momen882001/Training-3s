import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Addform from '../../Components/Book/AddForm'
import BookContainer from '../../Components/Book/BookContainer'
import Header from '../../Components/Book/Header'
import { getBooks } from '../../store/bookSlice'

const Bookstore = () => {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <>
    <Header/>
    <Container >
      <Addform/>
      <BookContainer/>
    </Container>
    </>
  )
}

export default Bookstore