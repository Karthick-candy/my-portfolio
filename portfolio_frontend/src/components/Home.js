import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaUserAlt } from "react-icons/fa"; // Import FaUserAlt for fallback icon
import "../assets/styles/Home.css";

const Home = () => {
  const profileImage = ""; // Leave it empty or assign a value to test the fallback mechanism

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Introduction Section */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          >
            Hi, I'm Karthick
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          >
            A passionate Full-Stack Developer with expertise in Python, Django, and React.js.
            I build scalable web applications and continuously explore new technologies.
          </motion.p>

          {/* Experience Section */}
          <motion.div
            className="experience"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
          >
            <h3>Experience & Expertise</h3>
            <p>
              With over 7 months of experience, I have honed my skills in creating efficient and scalable web
              applications using technologies like React.js, Django, Python, and MySQL. My goal is to constantly
              innovate and deliver high-quality solutions that make a difference.
            </p>
          </motion.div>

          {/* Profile Image or Default Icon */}
          <motion.div
            className="hero__photo-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          >
            {profileImage ? (
              <motion.img
                src={profileImage}
                alt="Karthick's Profile"
                className="hero__photo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1, ease: "easeOut" }}
              />
            ) : (
              <motion.div
                className="hero__photo-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1, ease: "easeOut" }}
              >
                <FaUserAlt size={150} color="#00bfae" />
              </motion.div>
            )}
          </motion.div>

          {/* Resume and Social Media Links */}
          <motion.a
            href="http://localhost:8000/api/resume/download"
            className="hero__button"
            download
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
          >
            Download Resume
          </motion.a>

          {/* Social Icons */}
          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1, ease: "easeOut" }}
          >
            <a href="https://github.com/Karthick-candy" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/karthick-thangarasu/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/KarthickDev" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
