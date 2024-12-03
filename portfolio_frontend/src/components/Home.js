import React from "react";
import "../assets/styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <h1>Hi, I'm Karthick</h1>
        <p>
          A Full-Stack Developer specializing in Python, Django, and React.js.
        </p>
        <a
          href="http://localhost:8000/api/resume/download"
          className="hero__button"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
