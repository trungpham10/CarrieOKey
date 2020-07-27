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

      <Nav justify className="justify-content-center align-items-center mb-5" >

        <Nav.Item>
          <Nav.Link><Link to="/"><Button>Home</Button></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/about"><Button>About</Button></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/newSong"><Button>New Song</Button></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/songs"><Button>Song List</Button></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/video"><Button>Karaoke Room</Button></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to="/songLookUp"><Button>Search Song</Button></Link></Nav.Link>
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