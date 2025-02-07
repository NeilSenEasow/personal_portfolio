import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import './Navbar.css';

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }

  function handleClick() {
    const customLink = "https://www.linkedin.com/in/neil-sen-easow-973606258/";
    window.location.href = customLink;
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : null}>
      <Container>
        <Navbar.Brand className="portfolio-logo" href="#home">
          NEIL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.instagram.com/neil.sen_04/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://web.whatsapp.com/">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://x.com/NeilSenEasow">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <button className="skrr" onClick={handleClick}>
              <span>Let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
