import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const store = configureStore({
  reducer: {
    blog: reducers,
  },
});

export default store;