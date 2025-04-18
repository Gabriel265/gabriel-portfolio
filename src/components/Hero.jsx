import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heroPhoto from '../assets/images/hero-photo.jpg';

const Hero = () => {
 
  return (
    <section id="hero">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="dashboard"
      >
        <motion.div
          className="profile-card"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >


          <img  
              src={heroPhoto}  
              alt="Gabriel"  
              className="avatar"  
          />  
          <h1>Gabriel Kadiwa</h1>
          <p>FullStack Developer • IT Consultant • Software Engineer</p>
          <div className="socials">
            <a href="https://github.com/Gabriel265" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/gabriel-kadiwa-b2832b1b7" target="_blank"><FaLinkedin /></a>
            <a href="mailto:gabrielkadiwa@gmail.com"><FaEnvelope /></a>
          </div>
        </motion.div>

        <motion.div
          className="quick-links"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a href="#projects">📁 Projects</a>
          <a href="#skills">🧠 Skills</a>
          <a href="#experience">📜 Experience</a>
          <a href="#certifications">📜 Certifications</a>
          <a href="#contact">📬 Contact</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
