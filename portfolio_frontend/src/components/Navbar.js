import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  Send 
} from 'lucide-react';
import "../assets/styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: <Home /> },
    { path: '/about', label: 'About', icon: <User /> },
    { path: '/skills', label: 'Skills', icon: <Code /> },
    { path: '/projects', label: 'Projects', icon: <Briefcase /> },
    { path: '/contact', label: 'Contact', icon: <Send /> }
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      className="navbar navbar-theme"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar__container">
        <motion.div 
          className="navbar__logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Karthick's Portfolio
        </motion.div>

        {/* Mobile Hamburger Button */}
        <div 
          className={`navbar__hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <motion.div 
          className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.div 
              key={item.path}
              variants={itemVariants}
              className="navbar__menu-item"
            >
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  isActive ? 'navbar__link active' : 'navbar__link'
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
