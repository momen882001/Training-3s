import { book } from "../../store/bookSlice";

type BookInfoProps = {
  selectedBook: book
}

const BookInfo = (props: BookInfoProps) => {


  return (
    <>
      <h2>Book Details</h2>
      <div className="alert alert-secondary" role="alert">
        There is no books selected yet. Please select!
      </div>
      <div>
        <p className="fw-bold">Title: {props.selectedBook.title} </p>
        <p className="fw-light">Description: {props.selectedBook.description} </p>
        <p className="fst-italic">Price: {props.selectedBook.price} </p>
      </div>
    </>
  );
};

export default BookInfo;