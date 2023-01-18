export const AccountsRoutes = {
  LOGIN: "/auth/login/",
  REGISTER: "/auth/register/",
  GET_USER_DATA: "/auth/me/",
  GET_USER_POSTS: "/auth/my-posts/",
};

export const PostsRoutes = {
  GET_POSTS: "/posts/",
  GET_POST: "/posts/:id/",
  CREATE_POST: "/posts/",
  UPDATE_POST: "/posts/:id/",
  DELETE_POST: "/posts/:id/",
  CREATE_COMMENT: "/posts/comments/",
  DELETE_COMMENT: "/posts/comments/:id/",
};
