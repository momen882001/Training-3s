const BookInfo = () => {
  return (
    <>
      <h2>Book Details</h2>
        <div className="alert alert-secondary" role="alert">
          There is no books selected yet. Please select!
        </div>
        <div>
          {/* <p className="fw-bold">Title: </p> */}
          {/* <p className="fw-light">
            Description: 
          </p> */}
          {/* <p className="fw-light">Author: </p> */}
          {/* <p className="fst-italic">Price: </p> */}
        </div>
    </>
  );
};

export default BookInfo;