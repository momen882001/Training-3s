import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBooks } from "../../store/bookSlice";
import Swal from 'sweetalert2'
import './book.css'
// types
import { bookState } from "../../store/bookSlice";
import { authState } from "../../store/authSlice";

type BookListProps = {
  getBookId: (id: number) => void
}

const BooksList = (props: BookListProps) => {

  const dispatch = useDispatch();
  const getBookStatedata: bookState = useSelector((state: any) => state.book);
  const { isLoggedIn }: authState = useSelector((state: any) => state.auth);

  const handleDeleteBooks = (id: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteBooks(id))
      }
    })
  }

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Books List</h2>
      {/* <div className="ul-container" > */}
      <ul className="list-group">
        {
          getBookStatedata.books?.length === 0  ?
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
                    style={{ cursor: "pointer" }}
                    onClick={() => props.getBookId(item.id)}
                  >
                    Read
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    disabled={!isLoggedIn}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteBooks(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )

            )
        }
      </ul>
      {/* </div> */}
    </div>
  );
};

export default BooksList;