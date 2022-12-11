import * as React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import ErrorPage from "./components/ErrorPage";
import User from "./components/User";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="about"> About </Link>
          </li>
          <li>
            <Link to="users"> Users </Link>
          </li>
          <li>
            <Link to="errorpage"> ErrorPage </Link>
          </li>
        </ul>
      </nav>

      {/* Butona basıldıktan sonra nereye gidileceğini gösteren yol haritamızı burada tanımlıyoruz. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
