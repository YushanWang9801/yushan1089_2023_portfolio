import Blog from './comp/Blog';
import Gallery from './comp/Gallery';
import Project from "./comp/Project";
import Mainpage from "./comp/Mainpage";
import AboutPage from './comp/AboutPage';

import HeaderWang from './comp/HeaderWang';
import Footer from './comp/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useEffect} from "react";
import useLocalStorage from 'use-local-storage';

import SingleBlog from './comp/Blog/SingleBlog';
import SingleArticle from './comp/Blog/SingleArticle';

import blogs from "./comp/Blog/blogs-data.json";
const blog = blogs[3];

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
          <Route path="test" element={<SingleArticle blog={blog}/>} />
          <Route path="love-letter" element={<SingleArticle blog={blog} category={"love-letter"}/>} />
        </Routes>
      </Router> 
      <Footer />
    </div>
  );
}


export default App;
