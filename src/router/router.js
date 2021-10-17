import About from "../pages/About";
import Error from "../pages/Error";
import { Login } from "../pages/Login";
import Post from "../pages/Post";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: Post, exact: true },
  { path: "/about", component: About, exact: false },
  { path: "/error", component: Error, exact: false },
];
export const publicRoutes = [{ path: "/login", component: Login, exact: true }];
