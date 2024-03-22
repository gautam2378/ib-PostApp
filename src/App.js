import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllBlog from './components/allBlog';
import BlogDesc from './components/blogDesc';
import EditBlog from './components/editBlog';
import CreateBlog from './components/createBlog';
import NotFound from './components/NotFound'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AllBlog />} />
          <Route path="/CreateBlog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<BlogDesc />} />
          <Route path="/edit/:id" element={<EditBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
