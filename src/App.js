import Blog from './comp/Blog';
import Gallery from './comp/Gallery';
import Project from "./comp/Project";
import Mainpage from "./comp/Mainpage";
import SingleBlog from './comp/Blog/SingleBlog';
import AboutPage from './comp/AboutPage';
import HeaderWang from './comp/HeaderWang';
import Footer from './comp/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TestPage from './comp/TestPage';
import {useEffect} from "react";
import useLocalStorage from 'use-local-storage';

// const setDarkTheme = () => {
//   document.querySelector("body").setAttribute("data-theme", "dark");
// };

// const setLightTheme = () => {
//     document.querySelector("body").setAttribute("data-theme", "light");
// };

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App" >
      {/* <HeaderWang setDarkMode={setDarkMode} darkMode={darkMode}/> */}
      <HeaderWang switchTheme={switchTheme} theme={theme} />
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="project" element={<Project />} />
          <Route path="blog" element={<Blog />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="singleBlog" element={<SingleBlog />} />
          <Route path="me" element={<AboutPage />} />
          <Route path="test" element={<TestPage />} />
        </Routes>
      </Router> 
      <Footer />
    </div>
  );
}


export default App;
