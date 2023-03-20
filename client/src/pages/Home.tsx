import { Provider } from "react-redux"
import About from "../Components/AboutUs/About"
import Contact from "../Components/ContactUs/Contact"
import Counter from "../Components/Counter/Counter"
import Navbar from "../Components/Navbar/Navbar"
import Slider from "../Components/Slider/Slider"
import Todo from "../Components/TodoList/Todo"
import store from '../store/index'

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Todo />
      <About />
      <Provider store={store}>
        <Counter />
      </Provider>
      <Contact />
    </>
  )
}

export default Home