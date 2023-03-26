import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookstore from "./pages/Bookstore/Bookstore";
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bookstore" element={<Bookstore/>} />
      </Routes>
    </Router>
  )
}

export default App
