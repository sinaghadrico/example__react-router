import React, {
  lazy,
  Suspense
} from "react";
import Post from "pages/PostPage"
import Blog from "pages/BlogPage"
import NotFound from "pages/NotFound"
import Example from "pages/Example"
import Login from "pages/LoginPage"
import ProfilePage from "pages/ProfilePage"
import LogoutPage from "pages/LogoutPage"

function WaitingComponent(Component:any) {
  return (props:any) => (
    <Suspense fallback={<div>در حال لود...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

  const routes = [{
      exact: true,
      path: "/",
      component: WaitingComponent(lazy(() => import("./pages/HomePage"))),
    },
    {
      path: "/about-us",
      component: WaitingComponent(lazy(() => import("./pages/AboutUsPage"))),
    },
    {
      path: "/blog",
      component: Blog,
      
    },
    {
      path: "/post/:page",
      component: Post,
    },
    {
      private: true,
      path: "/profile",
      component: ProfilePage,
    },
    {
      path: "/example/:sort(asc|dec)?",
      component: Example,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/logout",
      component: LogoutPage,
    },
    {
      component: NotFound,
    },
  ]

  export default routes

  // path: "/example/:page?",
  // path: "/example/:page([0-9]+)",
  // path: "/example/:name([A-Za-z]+)",