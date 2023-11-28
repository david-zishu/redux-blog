import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
// import postsReducer from "../features/posts/postsSlice";
import postsReducer from "../features/posts/postsSliceAsynchronous";
// import usersReducer from "../features/users/usersSlice";
import usersReducer from "../features/users/usersSliceAsynchronous";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});
