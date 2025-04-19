import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import { FaInfoCircle } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Developer 👨‍💻',
    company: 'Codexplorer Ltd.',
    icon: '/icons/codexplorer.png',
    start: 'Sep 2024',
    end: 'Present',
    tech: ['React', 'Django', 'Vite'],
    summary: 'Built web apps using Django and React.',
    details: 'Led full-stack development, integrated APIs, and maintained deployment pipelines.'
  },
  {
    title: 'Associate Technical Consultant 🧠',
    company: 'Techno Brain Ltd.',
    icon: '/icons/technobrain.png',
    start: 'Oct 2020',
    end: 'Jun 2022',
    tech: ['Java', 'Spring Boot', 'Azure'],
    summary: 'Led enterprise Java systems & client support.',
    details: 'Designed and deployed e-governance platforms and provided enterprise-level tech consultation.'
  },
  {
    title: 'ICT Intern 🖥️',
    company: 'UNC Project',
    icon: '/icons/unc.png',
    start: 'Oct 2017',
    end: 'Dec 2019',
    tech: ['Linux', 'Networking', 'Hardware'],
    summary: 'Maintained servers and supported IT systems.',
    details: 'Installed systems, assisted users, and supported the internal tech team.'
  }
];

const Experience = () => {
  const [modal, setModal] = useState(null);

  const getPosition = index => (index % 2 === 0 ? 'left' : 'right');

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="timeline-container">
        <motion.div
          className="timeline-bar"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1 }}
        />
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`exp-card ${getPosition(index)}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />
            <div className="exp-header">
              <img src={exp.icon} alt={exp.company} className="exp-icon" />
              <div>
                <h3>{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-duration">{exp.start} – {exp.end}</p>
              </div>
            </div>
            <p className="exp-summary">{exp.summary}</p>
            <div className="exp-tags">
              {exp.tech.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
            <button className="exp-modal-btn" onClick={() => setModal(index)}>
              <FaInfoCircle /> More
            </button>

            {modal === index && (
              <div className="exp-modal-overlay" onClick={() => setModal(null)}>
                <div className="exp-modal" onClick={e => e.stopPropagation()}>
                  <h3>{exp.title} – {exp.company}</h3>
                  <p>{exp.details}</p>
                  <button onClick={() => setModal(null)}>Close</button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
