const initialState = {
   
    blogPosts: JSON.parse(localStorage.getItem('blogPosts')) || [],
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BLOG_POST':
        return {
          ...state,
          blogPosts: [...state.blogPosts, action.payload],
        };
  
      case 'EDIT_BLOG_POST':
        const updatedPosts = state.blogPosts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
        return {
          ...state,
          blogPosts: updatedPosts,
        };
  
      case 'DELETE_BLOG_POST':
        const filteredPosts = state.blogPosts.filter(
          (post) => post.id !== action.payload
        );
        return {
          ...state,
          blogPosts: filteredPosts,
        };
  
      case 'LIKE_BLOG_POST':
        const likedPosts = state.blogPosts.map((post) =>
          post.id === action.payload
            ? { ...post, liked: !post.liked }
            : post
        );
        localStorage.setItem('blogPosts' ,JSON.stringify(likedPosts));
        return {
          ...state,
          blogPosts: likedPosts,
        };
  
      default:
        return state;
    }
  };
  
  export default reducers;
  