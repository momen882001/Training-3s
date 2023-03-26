import React from "react";
import { useSelector } from "react-redux";
// types
import { bookState } from "../../store/bookSlice";
import { authState } from "../../store/authSlice";

const BooksList = () => {

  const getBookStatedata : bookState = useSelector((state : any) => state.book);
  const {isLoggedIn} : authState = useSelector((state : any) => state.auth);

  return (
    <div>
      <h2>Books List</h2>
        <ul className="list-group">
                {
                  getBookStatedata.books === null?
                  <p>There are no books available!</p> :
                  getBookStatedata.books.map((item) => (
                    <li
                  className="list-group-item d-flex  justify-content-between align-items-center"
                  key={item.id}
                >
                  <div>{item.title}</div>
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={!isLoggedIn}
                      style={{cursor: "pointer"}}
                    >
                      Read
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      disabled={!isLoggedIn}
                      style={{cursor: "pointer"}}
                    >
                      Delete
                    </button>
                  </div>
                </li>
                  )
                    
                  )
                }
        </ul>
    </div>
  );
};

export default BooksList;