import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editBlogPost } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const EditBlogPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) =>
    state.blog.blogPosts.find((p) => p.id === parseInt(id))
  );
  const [error, setError] = useState('');
  const [title, setTitle] = useState(post.title);
  const [category, setCategory] = useState(post.category);
  const [content, setContent] = useState(post.content);

  useEffect(() => {
    let timeoutId;
    if (error) {
      timeoutId = setTimeout(() => {
        setError('');
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [error]);

  

  if (!post) {
    return <div>Post not found.</div>;
  }

  const handleEditPost = () => {
    if (title.trim() === '' || content.trim() === '' || category.trim() === '') {
      setError('Please complete all details!');
      return;
    }
  
    const updatedPost = {
      ...post,
      title,
      category,
      content
    };
  
    dispatch(editBlogPost(updatedPost));
    navigate(`/blog/${post.id}`);
  };
  
 
  const handleGoBack = () => {
    navigate('/');
  };
  return (
    <div>
      <Navbar />
      <div className="container-add">
        <div className='top'>
          <h1 className="heading-add">Add Blog Post</h1>
          <span onClick={handleGoBack}>
                <FontAwesomeIcon icon={faArrowLeft} /> 
              </span>
        </div>
        <form>
          <div class="form-group">
            <label for="title">Title:</label>
            <input type="text"
              class="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              name="title"
              placeholder="Enter the title"
              required />
          </div>
          <div className="form-group">
            <label for="category">Category:</label>
            <input className="form-control"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              name="category"
              placeholder="Enter the category"
              required>
            </input>
          </div>
          <div className="form-group">
            <label for="content">Content:</label>
            <textarea value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-control"
              id="content"
              name="content"
              rows="6"
              placeholder="Start writing your blog post"
              required></textarea>
          </div>
        </form>
        <div className="btn-area">
          <button onClick={handleEditPost} type="submit" className="btn">Update Post</button>
          {error && <p className="error-message">{error}</p>}
          
        </div>
      </div>
    </div>
  );
};

export default EditBlogPost;
