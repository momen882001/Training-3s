import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { deleteBooks } from "../../store/bookSlice";
// types
import { bookState } from "../../store/bookSlice";
import { authState } from "../../store/authSlice";

type BookListProps = {
  getBookId : (id : number) => void
}

const BooksList = (props : BookListProps ) => {

  const dispatch = useDispatch();
  const getBookStatedata : bookState = useSelector((state : any) => state.book);
  const {isLoggedIn} : authState = useSelector((state : any) => state.auth);

  return (
    <div>
      <h2>Books List</h2>
        <ul className="list-group">
                {
                  getBookStatedata.books?.length === 0?
                  <p>There are no books available!</p> :
                  getBookStatedata.books?.map((item) => (
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
                      onClick={() => props.getBookId(item.id)}
                    >
                      Read
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      disabled={!isLoggedIn}
                      style={{cursor: "pointer"}}
                      onClick={() => dispatch(deleteBooks(item.id))}
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