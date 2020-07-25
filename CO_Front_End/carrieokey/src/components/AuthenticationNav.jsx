import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Nav from "react-bootstrap/esm/Nav";

export default function AuthenticationNav(props) {
  if (props.isLoggedIn) {
    return (
      <Nav.Item>
          <Nav.Link><Link to="/login" onClick={() => props.handleLogout()}>
        <Button>
            Log out
        </Button>
          </Link></Nav.Link>
      </Nav.Item>
      
    );
  } else {
    return (
      <Nav.Item>
          <Nav.Link > <Link to="/login">
        <Button>
            Log in
        </Button>
        </Link>
            </Nav.Link>
        
          <Nav.Link > <Link to="/signup">
        <Button>
            Sign up
        </Button>
        </Link>
            </Nav.Link>
      </Nav.Item>
    );
  }
}
