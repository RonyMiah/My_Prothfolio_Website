import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-router-dom";
import "./Navber.css";

const Navber = () => {
  return (
    <div>
         
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#1c1333", maxWidth:'1367px' }}
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
              <Nav.Link href="#about">About Me</Nav.Link>
              </Zoom>
              <Zoom right>
              <Nav.Link href="#project">Project</Nav.Link>
              </Zoom>
              <Zoom right>
              <Nav.Link href="#skills">Skills</Nav.Link>
              </Zoom>
              <Zoom right>
              <Link style={{color:'#9692a1'}} className="d-block mt-2 text-decoration-none blogs-text-style"  to="/blogs"> Blogs </Link>
              </Zoom>
              <Zoom right>
              <Nav.Link href="#contact">ContactMe</Nav.Link>
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
