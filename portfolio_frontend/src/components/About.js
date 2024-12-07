import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaLaptopCode, 
  FaLayerGroup, 
  FaRocket 
} from 'react-icons/fa';
import "../assets/styles/About.css";

const About = () => {
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

  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C#"]
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Technologies",
      skills: ["React.js", "Django", "HTML5", "CSS3"]
    },
    {
      icon: <FaLayerGroup />,
      title: "Databases & Tools",
      skills: ["MySQL", "Git", "GitHub", "AWS EC2"]
    },
    {
      icon: <FaRocket />,
      title: "Cloud & Enterprise",
      skills: ["Azure Data Factory", "Microsoft Dynamics 365"]
    }
  ];

  return (
    <div className="about-container">
      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section className="about-header" variants={itemVariants}>
          <h1>
            Hello! I'm <span className="highlight">Karthick</span>
          </h1>
          <motion.p 
            className="subtitle"
            variants={itemVariants}
          >
            Full-Stack Developer | Innovator | Problem Solver
          </motion.p>
        </motion.section>

        <motion.section className="about-description" variants={itemVariants}>
          <p>
            A passionate Full-Stack Developer with a keen eye for creating scalable and 
            innovative web solutions. With 7 months of hands-on experience, I specialize 
            in transforming complex challenges into elegant, efficient applications.
          </p>
        </motion.section>

        <motion.section className="skills-showcase" variants={itemVariants}>
          <h2>Professional Skill Matrix</h2>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="skill-category"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="skill-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <ul>
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="professional-journey" variants={itemVariants}>
          <h2>Professional Journey</h2>
          <div className="journey-timeline">
            <motion.div 
              className="journey-item"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Full-Stack Development</h3>
              <p>
                Completed an intensive full-stack development course, mastering 
                technologies like React and Python Django. Developed an eCommerce 
                platform with JWT authentication and comprehensive CRUD operations.
              </p>
            </motion.div>

            <motion.div 
              className="journey-item"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Internship Experience</h3>
              <p>
                Contributed to a High Court of Australia project using C# and 
                Dynamics 365. Developed custom solutions and enhanced front-end 
                development skills through a movie ticket booking system.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="current-focus" variants={itemVariants}>
          <h2>Current Focus & Goals</h2>
          <p>
            Currently diving deep into Python Full-Stack development, with a strong 
            emphasis on cloud technologies and API integrations. My goal is to become 
            a versatile developer who can architect robust, scalable solutions.
          </p>
          <motion.a 
            href="/contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Collaborate with Me
          </motion.a>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default About;