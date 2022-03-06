import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navber.css";

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
            {" "}
            RONY{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-bolder">
              <Nav.Link to="">Home</Nav.Link>
              <Nav.Link href="#pricing">About Me</Nav.Link>
              <Nav.Link href="#sdfg">Resume</Nav.Link>
              <Nav.Link href="#dsf">Blogs</Nav.Link>
              <Nav.Link href="#pridscing">ContactMe</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#memes">
                <a href="https://www.youtube.com/channel/UCJJnoGXaRAFH8RvoPCHBUSQ">
                  <i
                    style={{ color: "yellow" }}
                    className="fa-brands fa-youtube-square ms-3  fs-1"
                  ></i>
                </a>
                <a href="https://github.com/RonyMiah">
                  <i
                    style={{ color: "yellow" }}
                    className="fa-brands fa-github-square ms-3 fs-1"
                  ></i>
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
