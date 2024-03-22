import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { useDispatch } from 'react-redux';
import { createBlogPost } from '../redux/actions';

import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const CreateBlogPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

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

  const handleAddPost = () => {
    if (title.trim() === '' || content.trim() === '' || category.trim() === '') {
      setError('Please complete all details!');
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      category,
      content,
      liked: false,
    };

    dispatch(createBlogPost(newPost));

    setTitle('');
    setContent('');
    setError('');
    navigate('/');

  };
  const handleGoBack = () => {
    navigate('/');
  };
  return (
    <div>
      <Navbar />
      <div className="container-add">
        <div className='top'>
          <h1 className="heading-add">Create Blog Post</h1>
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
          <button onClick={handleAddPost} type="submit" className="btn">Create Post</button>
          {error && <p className="error-message">{error}</p>}

        </div>
      </div>
    </div>
  );
};

export default CreateBlogPost;
