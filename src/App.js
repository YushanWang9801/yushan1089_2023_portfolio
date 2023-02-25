import Blog from './comp/Blog';
import Gallery from './comp/Gallery';
import Project from "./comp/Project";
import Mainpage from "./comp/Mainpage";
import SingleBlog from './comp/Blog/SingleBlog';
import AboutPage from './comp/AboutPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TestPage from './comp/TestPage';

function App() {
  
  return (
    <div className="App">
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
    </div>
  );
}


export default App;
