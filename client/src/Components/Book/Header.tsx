import React from "react";
import { useSelector } from "react-redux";
import { logInOut } from "../../store/authSlice";
import { useDispatch } from "react-redux";
// types
import { authState } from "../../store/authSlice";
import { Link } from "react-router-dom";

const Header = () => {

  const dispatch = useDispatch();
  const { error } = useSelector((state: any) => state.book)
  const {isLoggedIn} : authState = useSelector((state : any) => state.auth);




  return (
    <>
      {
        error &&
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      }

      <nav className="navbar navbar-dark bg-dark p-2">
        <span className="navbar-brand mb-0 h1">
          <Link to='/' style={{textDecoration:"none" , color:"white"}}>
          My Books
          </Link>
          </span>

        <button
          className="btn btn-outline-primary mr-10"
          type="submit"
          onClick={() => dispatch(logInOut())}
          style={{cursor: "pointer"}}
        >
          {
            isLoggedIn ? "LogOut" : "LogIn" 
          }
        </button>
      </nav>
    </>
  );
};

export default Header;