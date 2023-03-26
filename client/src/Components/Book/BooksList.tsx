import React from "react";
import { useSelector } from "react-redux";
import { bookState } from "../../store/bookSlice";

const BooksList = () => {

  const getdata : bookState = useSelector((state : any) => state.book);

  return (
    <div>
      <h2>Books List</h2>
        <ul className="list-group">
                {
                  getdata.books &&
                  getdata.books.map((item) => (
                    <li
                  className="list-group-item d-flex  justify-content-between align-items-center"
                >
                  <div>{item.title}</div>
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-primary"
                    >
                      Read
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
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