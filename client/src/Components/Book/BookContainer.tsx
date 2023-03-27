import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import "./book.css";
import { useSelector } from "react-redux";
import { bookState, book } from "../../store/bookSlice";
import { useState } from "react";


const BookContainer = () => {

  const [selectedBook, setSelectedBook] = useState<book>({} as book)
  const getBookStatedata: bookState = useSelector((state: any) => state.book);

  const getBookId = (id: number) => {
    const BookInfo = getBookStatedata.books?.find((book) => book.id === id)
    if (BookInfo) {
      setSelectedBook(BookInfo)
    }
  }

  return (
    <>
      <hr className="my-5" />
      <div className="row" style={{ marginBottom: "2rem" }}>
        <div className="col">
          <BooksList
            getBookId={getBookId}
          />
        </div>
        <div className="col side-line">
          <BookInfo
          selectedBook={selectedBook}
          />
        </div>
      </div>
    </>
  );
};

export default BookContainer;