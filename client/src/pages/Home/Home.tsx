import React, { useState, useEffect } from 'react';
import About from "../../Components/AboutUs/About"
import Contact from "../../Components/ContactUs/Contact"
import Counter from "../../Components/Counter/Counter"
import Navbar from "../../Components/Navbar/Navbar"
import Slider from "../../Components/Slider/Slider"
import Todo from "../../Components/TodoList/Todo"
import '../../pages/darkMode.css';


const Home = () => {

  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <div className={`${theme}`}>
      <Navbar toggleTheme={toggleTheme} />
      <Slider />
      <Todo />
      <About />
      <Counter />
      <Contact />
    </div>
  )
}

export default Home
