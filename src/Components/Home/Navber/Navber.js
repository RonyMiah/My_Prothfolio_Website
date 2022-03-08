import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navber.css";
import Zoom from 'react-reveal/Zoom';

const Navber = () => {
  return (
    <div>
         
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#1c1333" }}
      >
        
        <Container>
          <Navbar.Brand href="#home" className="fs-1 fw-bolder">
          <Zoom left>
            {" "}
            RONY{" "}
            </Zoom>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
         
            <Nav className="me-auto fw-bolder">
            <Zoom right>
              <Nav.Link to="">Home</Nav.Link>
              </Zoom>
              <Zoom right>
              <Nav.Link href="#pricing">About Me</Nav.Link>
              </Zoom>
              <Zoom right>
              <Nav.Link href="#sdfg">Resume</Nav.Link>
              </Zoom>
              <Zoom right>
              <Nav.Link href="#dsf">Blogs</Nav.Link>
              </Zoom>
              <Zoom right>
              <Nav.Link href="#pridscing">ContactMe</Nav.Link>
              </Zoom>
            </Nav>
           
            <Nav>
              <Nav.Link href="#memes">
                <a href="https://www.youtube.com/channel/UCJJnoGXaRAFH8RvoPCHBUSQ">
                <Zoom bottom>
                  <i
                    style={{ color: "yellow" }}
                    className="fa-brands fa-youtube-square ms-3  fs-1"
                  ></i>
                  </Zoom>
                </a>
                <a href="https://github.com/RonyMiah">
                <Zoom bottom>
                  <i
                    style={{ color: "yellow" }}
                    className="fa-brands fa-github-square ms-3 fs-1"
                  ></i>
                  </Zoom>
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
      
    </div>
  );
};

export default Navber;
