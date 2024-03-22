import React from 'react';
import Navbar from './navbar';
import { deleteBlogPost } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const AllBlog = () => {
    const blogPosts = useSelector((state) => state.blog.blogPosts);
    const dispatch = useDispatch();

    const handleDelete = (postId) => {
        dispatch(deleteBlogPost(postId));
    };

    return (
        <div>
            <Navbar />
            <div className="container-list">
                <table className='bloglist table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogPosts.map((post, index) => (
                            <tr key={post.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <Link to={`/blog/${post.id}`} className='link'>{post.title}</Link>
                                </td>
                                <td>
                                    <div className="list-content">
                                        <Link to={`/edit/${post.id}`} className="icon-container">
                                            <FontAwesomeIcon icon={faEdit} className='edit-icon' />
                                        </Link>
                                        <span onClick={() => handleDelete(post.id)} className="icon">
                                            <FontAwesomeIcon icon={faTrash} className='delete-icon' />
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBlog;
