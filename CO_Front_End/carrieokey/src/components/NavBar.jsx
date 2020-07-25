import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../App.css";
import AuthenticationNav from "./AuthenticationNav";
import Button from 'react-bootstrap/Button'

export default function NavBar(props) {
  return (
    <Container>
      <Nav justify className="justify-content-center align-items-center" >

        <Nav.Item>
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/about">About</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/newSong">New Song</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/songs">Song List</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/video">Karaoke Room</Link></Nav.Link>
        </Nav.Item>
        {/* //conditional rendering of buttons based on logged in state */}
        {props.isLoggedIn ?
          <Nav.Item>
            <Nav.Link><Link to="/login" onClick={() => props.handleLogout()}>
              <Button>Log out</Button>
            </Link></Nav.Link>
          </Nav.Item> 
          :
          <>
            <Nav.Item>
              <Nav.Link > <Link to="/login">
                <Button>Log in</Button>
              </Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link > <Link to="/signup">
                <Button>Sign up</Button>
              </Link></Nav.Link>
            </Nav.Item>
          </>
        }


      </Nav>
    </Container>
  );
}
