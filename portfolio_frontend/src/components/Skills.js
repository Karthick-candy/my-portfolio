import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server,  
  Terminal, 
} from 'lucide-react';
import '../assets/styles/Skills.css';

// Advanced Container Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  }
};

// Enhanced Skill Card Animation Variants
const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.7,
    rotate: -10,
    y: 50 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 15,
      duration: 0.5
    }
  },
  hover: {
    scale: 1.08,
    rotate: 3,
    boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
    transition: {
      type: "spring",
      stiffness: 350
    }
  }
};

const SkillCategory = ({ title, skills, Icon, gradient }) => {
  return (
    <motion.div 
      className="skill-category-enhanced"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
    >
      <motion.div 
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
        className="skill-icon-container"
      >
        <Icon className="skill-icon-enhanced" />
      </motion.div>
      <h3>{title}</h3>
      <motion.ul 
        className="skill-category-list-enhanced"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.5 
          }
        }}
      >
        {skills.map((skill, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                delay: index * 0.15,
                type: "spring",
                stiffness: 300
              }
            }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C#", "TypeScript"],
      Icon: Code,
      gradient: ["#6a11cb", "#2575fc"]
    },
    {
      title: "Web Technologies",
      skills: ["Django", "React.JS", "PowerApps Framework", "HTML5", "CSS3"],
      Icon: Terminal,
      gradient: ["#ff6a00", "#ee0979"]
    },
    {
      title: "Database Technologies",
      skills: ["MySQL", "Microsoft Dynamics 365", "SQL Server", "Azure Data Factory"],
      Icon: Database,
      gradient: ["#42e695", "#3bb2b8"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS EC2", "Azure Data Factory", "Power Automate Flow", "CI/CD Workflows"],
      Icon: Server,
      gradient: ["#fc00ff", "#00dbde"]
    }
  ];

  return (
    <motion.div 
      className="skills-container-enhanced"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="skills-content-enhanced">
        <motion.div 
          className="skills-header-enhanced"
          initial={{ opacity: 0, y: -50 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.7,
              type: "spring",
              stiffness: 200
            }
          }}
        >
          <h1>Professional <span className="highlight-enhanced">Skills</span></h1>
          <p className="subtitle-enhanced">Transforming Complex Challenges into Elegant Solutions</p>
        </motion.div>

        <motion.p 
          className="skills-description-enhanced"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1,
            scale: 1,
            transition: { 
              delay: 0.5,
              duration: 0.6
            }
          }}
        >
          A comprehensive overview of technical proficiencies developed through 
          academic training and professional experience, with a focus on innovative 
          problem-solving and cutting-edge technologies.
        </motion.p>

        <motion.div 
          className="skills-grid-enhanced"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              skills={category.skills} 
              Icon={category.Icon}
              gradient={category.gradient}
            />
          ))}
        </motion.div>

        <motion.div 
          className="skills-footer-enhanced"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { 
              delay: 1,
              duration: 0.7
            }
          }}
        >
          <motion.p 
            className="skills-quote-enhanced"
            whileHover={{ 
              scale: 1.05, 
              rotate: 2,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            "Continuous learning is the key to staying relevant in the ever-evolving 
            landscape of technology."
          </motion.p>
          <motion.a 
            href="https://github.com/Karthick-candy/real-engineering-main-/tree/master" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-link-enhanced"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;