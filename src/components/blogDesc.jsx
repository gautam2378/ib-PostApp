import React, { useEffect } from 'react';
import Navbar from './navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { likeBlogPost } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BlogDesc = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const initialLikedstate = JSON.parse(localStorage.getItem('liked_${id}')) || false;
    const post = useSelector((state) =>
        state.blog.blogPosts.find((p) => p.id === parseInt(id))
    );

    useEffect(() => {

        if (!post) {

            navigate('/');
        }
    }, [post, navigate]);

    const handleLike = () => {

        if (post) {
          
          dispatch(likeBlogPost(post.id));
          navigate('/');
          navigate(`/blog/${post.id}`);
       
        }
    };

    const handleGoBack = () => {
        navigate('/');
      };
    return (
        <div className="blog-post-container">
        <Navbar />
        {post ? (
          <div className="blog-post">
            <div className="post-header">
              <span onClick={handleGoBack}>
                <FontAwesomeIcon icon={faArrowLeft} /> 
              </span>
              <h1 className="post-title">{post.title}</h1>
            </div>
            <div className="post-details">
              <h6 className="category">Category: {post.category}</h6>
              <p className="post-content">{post.content}</p>
            </div>
            <div className="like-section">
              <span onClick={handleLike} className={`like-icon ${post.liked ? 'liked' : ''}`}>
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
              <span className="like-text">
                {post.liked ? 'Liked' : 'Not Liked'}
              </span>
            </div>
          </div>
        ) : (
          <div className="post-not-found">Post not found.</div>
        )}
      </div>
    );
};

export default BlogDesc;
