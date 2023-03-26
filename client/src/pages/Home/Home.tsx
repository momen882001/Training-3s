import React, { useState, useEffect } from 'react';
import About from "../../Components/AboutUs/About"
import Contact from "../../Components/ContactUs/Contact"
import Counter from "../../Components/Counter/Counter"
import Navbar from "../../Components/Navbar/Navbar"
import Slider from "../../Components/Slider/Slider"
import Todo from "../../Components/TodoList/Todo"
import '../../pages/darkMode.css';


const Home = (props: any) => {




  return (
    <>
      <Navbar toggleTheme={props.toggleTheme} />
      <Slider />
      <Todo />
      <About />
      <Counter />
      <Contact />
    </>
  )
}

export default Home
