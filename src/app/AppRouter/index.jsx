import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Page, ScrollToTop } from "@/components";

//pages
import ErrorPage from "@/features/NotFoundRoute";
import Login from "@/features/auth/containers/Login";
import { ProtectedRoute, PublicOnlyRoute } from "./routes";
import HomePage from "@/features/HomePage";
import CreatePost from "@/features/CreatePost";
import Register from "@/features/auth/containers/Register";
import PostDetail from "@/components/layout/Post/PostDetail";

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
        path: "/",
        element: <Page />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: (
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/posts/:id",
        element: <Page />,
        //errorElement: <ErrorPage />,
        children: [
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
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
