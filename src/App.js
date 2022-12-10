import * as React from "react";
import { Outlet, Link, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import ErrorPage from "./components/ErrorPage";
import User from "./components/User";

export default function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        {
          path: "/users",
          element: <Users />,
          children: [{ path: "/users/:id", element: <User /> }],
        },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ];

  let element = useRoutes(routes);

  return (
    <div>
      <h1>Route Objects Example</h1>

      {element}
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
