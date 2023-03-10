import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";

import { Page, ScrollToTop } from "@/components";

//pages
import ErrorPage from "@/features/NotFoundRoute";
import Login from "@/features/auth/containers/Login";
import { ProtectedRoute, PublicOnlyRoute } from "./routes";
import CreatePost from "@/features/CreatePost";
import Register from "@/features/auth/containers/Register";
import PostDetail from "@/components/layout/Post/PostDetail";
import Posts from "@/features/Posts";
import UpdatePost from "@/features/UpdatePost";
import MyPosts from "@/features/MyPosts";

const RouterComponents = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

export const router = createBrowserRouter([
  {
    element: <RouterComponents />,
    children: [
      {
        path: "/login",
        element: (
          <PublicOnlyRoute>
            <Login />
          </PublicOnlyRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: (
          <PublicOnlyRoute>
            <Register />
          </PublicOnlyRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/posts",
        element: <Page />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/posts",
            element: (
              <ProtectedRoute>
                <Posts />
              </ProtectedRoute>
            ),
          },
          {
            path: "/posts/:id",
            element: (
              <ProtectedRoute>
                <PostDetail />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/my-posts",
        element: <Page />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/my-posts",
            element: (
              <ProtectedRoute>
                <MyPosts />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/create-post",
        element: <Page />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/create-post",
            element: (
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/update-post/:id",
        element: <Page />,
        //errorElement: <ErrorPage />,
        children: [
          {
            path: "/update-post/:id",
            element: (
              <ProtectedRoute>
                <UpdatePost />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to={"/posts"} replace />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
