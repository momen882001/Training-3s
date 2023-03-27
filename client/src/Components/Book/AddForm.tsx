import React , {useRef , FormEvent , useState} from "react";
import { useSelector , useDispatch } from "react-redux";
import { authState } from "../../store/authSlice";
import { book } from "../../store/bookSlice";
import { insertBooks } from "../../store/bookSlice";

const Addform = () => {

  const [counter,setCounter] = useState<number>(1)

  const dispatch = useDispatch()
  const { isLoggedIn }: authState = useSelector((state: any) => state.auth);
  const title = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.current?.value === "" || price.current?.value === "" || description.current?.value === "") {
      alert("All fields are required");
    } else {
      const newBook : book = {
        // id : counter,
        id : 0,
        title: title.current?.value ?? "",
        price: price.current?.valueAsNumber ?? 0, 
        description: description.current?.value ?? "",
      };
      console.log(newBook);
      dispatch(insertBooks(newBook))
    if(title.current)  title.current.value = ""
    if(price.current)  price.current.value = ""
    if(description.current)  description.current.value = ""
    // setCounter(counter + 1)
    }
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit} >
          <div className="form-group mb-3">
            <label htmlFor="title" className="mb-1">Title</label>
            <input
            ref={title}
              type="text"
              className="form-control"
              id="title"
              // required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="price" className="mb-1">Price</label>
            <input
              ref={price}
              type="number"
              className="form-control"
              id="price"
              // required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="Description" className="mb-1">Description</label>
            <textarea
            ref={description}
              className="form-control"
              id="Description"
              rows={3}
              // required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isLoggedIn}
            style={{cursor: "pointer"}}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;