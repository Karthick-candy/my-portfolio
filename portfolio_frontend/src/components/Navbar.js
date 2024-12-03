import React from "react";
import "../assets/styles/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Karthick's Portfolio</h1>
      <ul className="navbar__menu">
        <li>
          <Link to="home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
