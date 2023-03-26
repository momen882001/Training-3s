import React from "react";
import { useSelector } from "react-redux";

const Header = () => {

  const { error } = useSelector((state: any) => state.book)


  return (
    <>
      {
        error &&
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      }

      <nav className="navbar navbar-dark bg-dark p-2">
        <span className="navbar-brand mb-0 h1">My Books</span>

        <button
          className="btn btn-outline-primary mr-10"
          type="submit"
        >
          Login
        </button>
      </nav>
    </>
  );
};

export default Header;