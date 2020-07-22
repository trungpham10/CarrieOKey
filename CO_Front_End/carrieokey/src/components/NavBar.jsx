import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
    </div>
  );
}
