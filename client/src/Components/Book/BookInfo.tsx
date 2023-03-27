import { book } from "../../store/bookSlice";
import { useSelector } from "react-redux";
import { bookState } from "../../store/bookSlice";

type BookInfoProps = {
  selectedBook: book
}

const BookInfo = (props: BookInfoProps) => {

  const getBookStatedata : bookState = useSelector((state : any) => state.book);

  return (
    <>
      <h2 style={{marginBottom:"1rem"}}>Book Details</h2>
      {
        Object.values(props.selectedBook).length === 0 || getBookStatedata.books?.length === 0 ?
          <div className="alert alert-secondary" role="alert">
            There is no books selected yet. Please select!
          </div>
          :
          <div>
            <p className="fst-bold"><span className="fw-bold" >Title: </span> {props.selectedBook.title} </p>
            <p className="fst-bold"><span className="fw-bold">Description: </span>{props.selectedBook.description} </p>
            <p className="fst-bold"><span className="fw-bold">Price: </span>{props.selectedBook.price} </p>
          </div>
      }
    </>
  );
};

export default BookInfo;