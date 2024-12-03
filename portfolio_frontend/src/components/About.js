import React from 'react';
import { motion } from 'framer-motion';
import "../assets/styles/About.css";

const About = () => {
  // Animation variants for different sections
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const rotate = {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 1 } },
  };

  return (
    <div className="about-container">
      <section className="about-header">
        <motion.h1 
          variants={fadeIn} 
          initial="hidden" 
          animate="visible"
        >
          Hello! I'm Karthick
        </motion.h1>
      </section>

      <section className="about-description">
        <motion.p 
          variants={scaleUp} 
          initial="hidden" 
          animate="visible"
        >
          I’m a passionate Full-Stack Developer with strong expertise in Python, Django, JavaScript, React, and MySQL. 
          I have 7 months of hands-on experience working on real-world projects, where I’ve developed both front-end and back-end skills.
        </motion.p>
      </section>

      <section className="skills-section">
        <motion.h2 
          variants={slideUp} 
          initial="hidden" 
          animate="visible"
        >
          Skills & Technologies
        </motion.h2>
        <motion.ul 
          variants={slideUp} 
          initial="hidden" 
          animate="visible"
        >
          <li>Programming Languages: Python, JavaScript, C#</li>
          <li>Web Development: React.js, Django, HTML, CSS</li>
          <li>Databases: MySQL</li>
          <li>Version Control: Git, GitHub</li>
          <li>Cloud Technologies: AWS EC2</li>
          <li>Others: Azure Data Factory, Microsoft Dynamics 365</li>
        </motion.ul>
      </section>

      <section className="journey-section">
        <motion.h2 
          variants={slideLeft} 
          initial="hidden" 
          animate="visible"
        >
          Professional Journey
        </motion.h2>
        <motion.p 
          variants={slideLeft} 
          initial="hidden" 
          animate="visible"
        >
          I began my career by completing a full-stack development course, during which I gained knowledge in building dynamic web applications.
          I worked on an eCommerce platform using React and Python Django, focusing on features like JWT-based authentication and CRUD operations.
        </motion.p>
        <motion.p 
          variants={slideLeft} 
          initial="hidden" 
          animate="visible"
        >
          During my internship, I contributed to a High Court of Australia project, using C# and Dynamics 365 to develop custom solutions. 
          Additionally, I built an online movie ticket booking system, which allowed me to enhance my front-end development skills.
        </motion.p>
      </section>

      <section className="focus-section">
        <motion.h2 
          variants={rotate} 
          initial="hidden" 
          animate="visible"
        >
          Current Focus
        </motion.h2>
        <motion.p 
          variants={rotate} 
          initial="hidden" 
          animate="visible"
        >
          I am currently focusing on projects that leverage the MERN stack, while also learning more about cloud technologies and API integrations. 
          I am improving my skills in Django to create robust back-end systems.
        </motion.p>
      </section>

      <section className="goals-section">
        <motion.h2 
          variants={fadeIn} 
          initial="hidden" 
          animate="visible"
        >
          Career Goals
        </motion.h2>
        <motion.p 
          variants={fadeIn} 
          initial="hidden" 
          animate="visible"
        >
          My goal is to become a proficient Full-Stack Developer, specializing in MERN stack development. I am looking for opportunities to work on challenging projects 
          and contribute to the development of innovative solutions.
        </motion.p>
      </section>

      <section className="contact-section">
        <motion.h2 
          variants={slideUp} 
          initial="hidden" 
          animate="visible"
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          variants={slideUp} 
          initial="hidden" 
          animate="visible"
        >
          I’m always open to new opportunities and collaborations. Feel free to reach out to me for freelance work, full-time positions, or just to connect!
        </motion.p>
      </section>
    </div>
  );
};

export default About;
