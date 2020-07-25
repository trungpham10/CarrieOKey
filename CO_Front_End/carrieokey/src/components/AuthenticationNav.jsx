import React from "react";
import { Link } from "react-router-dom";

export default function AuthenticationNav(props) {
  if (props.isLoggedIn) {
    return (
      <div>
        <button>
          <Link to="/login" onClick={() => props.handleLogout()}>
            Log out
          </Link>
        </button>
        <br />
      </div>
    );
  } else {
    return (
      <div>
        <button>
          <Link to="/login">Log in</Link>
        </button>
        <br />
        <button>
          <Link to="/signup">Sign up</Link>
        </button>
        <br />
      </div>
    );
  }
}
