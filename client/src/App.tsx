import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookstore from "./pages/Bookstore/Bookstore";
import Home from './pages/Home/Home';
import { useState, useEffect } from "react";

const App = () => {

  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () =>  {
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
    <Router>
      <Routes>
        <Route path="/" element={
          <div className={`${theme}`}>
            <Home toggleTheme={toggleTheme} />
          </div>
        } />
        <Route path="/bookstore" element={
          <div className={`${theme}`}>
            <Bookstore />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
