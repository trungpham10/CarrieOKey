import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
}
