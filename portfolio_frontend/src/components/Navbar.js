import React from "react";
import "../assets/styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Karthick's Portfolio</h1>
      <ul className="navbar__menu">
        <li>
          <NavLink to="/" smooth duration={500}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" smooth duration={500}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="skills" smooth duration={500}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="projects" smooth duration={500}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" smooth duration={500}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
