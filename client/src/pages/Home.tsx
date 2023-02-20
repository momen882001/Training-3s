import About from "../Components/AboutUs/About"
import Contact from "../Components/ContactUs/Contact"
import Navbar from "../Components/Navbar/Navbar"
import Todo from "../Components/TodoList/Todo"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Todo/>
    <About/>
    <Contact/>
    </>
  )
}

export default Home