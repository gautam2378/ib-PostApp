import { updateLocalStorage } from './localStorage';

export const createBlogPost = (post) => (dispatch, getState) => {
  dispatch({ type: 'ADD_BLOG_POST', payload: post });
  const Resultstate = getState();
  updateLocalStorage(Resultstate.blog.blogPosts);
};

export const editBlogPost = (updatedPost) => (dispatch, getState) => {
  dispatch({ type: 'EDIT_BLOG_POST', payload: updatedPost });
  const Resultstate = getState();
  updateLocalStorage(Resultstate.blog.blogPosts);
};

export const deleteBlogPost = (postId) => (dispatch, getState) => {
  dispatch({ type: 'DELETE_BLOG_POST', payload: postId });
  const Resultstate = getState();
  updateLocalStorage(Resultstate.blog.blogPosts);
};

export const likeBlogPost = (postId) => ({
  type: 'LIKE_BLOG_POST',
  payload: postId,
});