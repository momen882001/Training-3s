import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import "./book.css";

const BookContainer = () => {

  return (
    <>
      <hr className="my-5" />
      <div className="row" style={{marginBottom:"2rem"}}>
        <div className="col">
          <BooksList
          />
        </div>
        <div className="col side-line">
          <BookInfo/>
        </div>
      </div>
    </>
  );
};

export default BookContainer;