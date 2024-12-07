import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaUserAlt, 
  FaCode
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../assets/styles/Home.css";

const skills = [
  "Full-Stack Development", 
  "Python & Django", 
  "React.js", 
  "Web Architecture",
  "Performance Optimization"
];

const Home = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const profileImage = ""; // Placeholder for profile image

  useEffect(() => {
    const skillCycle = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(skillCycle);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        damping: 12, 
        stiffness: 100 
      }
    }
  };

  return (
    <div className="home-container">
      <motion.section 
        id="home" 
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero__grid">
          <motion.div 
            className="hero__content"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants}>
              Hi, I'm <span className="highlight">Karthick</span>
            </motion.h1>

            <motion.div 
              className="skill-rotator" 
              variants={itemVariants}
            >
              <FaCode className="skill-icon" />
              <AnimatePresence mode="wait">
                <motion.span 
                  key={currentSkill}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {skills[currentSkill]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p variants={itemVariants}>
              A passionate developer transforming ideas into scalable web solutions. 
              With expertise in Python, Django, and React.js, I create innovative 
              digital experiences that push technological boundaries.
            </motion.p>

            <motion.div 
              className="cta-buttons" 
              variants={itemVariants}
            >
              <motion.a 
                href="http://localhost:8000/api/resume/download"
                className="hero__button primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                Download Resume
              </motion.a>
              <motion.a 
                href="mailto:karthick@example.com"
                className="hero__button secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div 
              className="social-icons" 
              variants={itemVariants}
            >
              {[
                { Icon: FaGithub, url: "https://github.com/Karthick-candy" },
                { Icon: FaLinkedin, url: "https://www.linkedin.com/in/karthick-thangarasu/" },
                { Icon: FaTwitter, url: "https://twitter.com/KarthickDev" },
                { Icon: MdEmail, url: "mailto:karthick@example.com" }
              ].map(({ Icon, url }, index) => (
                <motion.a 
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero__photo-container" 
            variants={itemVariants}
          >
            {profileImage ? (
              <motion.img
                src={profileImage}
                alt="Karthick's Profile"
                className="hero__photo"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  damping: 10, 
                  stiffness: 100 
                }}
              />
            ) : (
              <motion.div
                className="hero__photo-icon"
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ 
                  type: "spring", 
                  damping: 10, 
                  stiffness: 100 
                }}
              >
                <FaUserAlt size={150} color="#00bfae" />
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;