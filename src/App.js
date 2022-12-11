import * as React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import ErrorPage from "./components/ErrorPage";
import User from "./components/User";

function App() {
  const activeStyle = {
    textDecoration: "underline",
    backgroundColor: "#ddd",
    fontSize: 18,
  };

  const activeClassName = "nav";

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to="/users"
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to="/errorPage"
            >
              ErrorPage
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Butona basıldıktan sonra nereye gidileceğini gösteren yol haritamızı burada tanımlıyoruz. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />}>
          {/* User componenti "Users.js" altında tanımlanırsa path="users/*" şeklinde yazılır. import işlemleri yapılır.  */}
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
