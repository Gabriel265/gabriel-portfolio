import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './Experience.css';
import { FaInfoCircle } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Developer, Graphic Designer 👨‍💻',
    company: 'Helping Hand PA and Sister Companies',
    icon: '/icons/hh.png',
    start: 'June 2025',
    end: 'Present',
    tech: ['React', 'Django', 'Vite'],
    summary: 'Develope required software services in Django, React, flutter etc.',
    details: 'Lead full-stack development, integrated APIs, and maintained deployment pipelines. Designing Logos and posters, promotional videos etc'
  },
  {
    title: 'Software Developer 👨‍💻',
    company: 'Codexplorer Ltd.',
    icon: '/icons/codexplorer.png',
    start: 'Sep 2024',
    end: 'Jul 2025',
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
      <Helmet>
        <title>Experience - Gabriel Kadiwa | Software & IT Specialist</title>
        <meta
          name="description"
          content="Explore Gabriel Kadiwa's experience in software development, IT support, technical consulting, and tutoring at Codexplorer, Techno Brain, and more."
        />
        <meta
          name="keywords"
          content="software development, IT support, technical consulting, web development, graphic design, tutoring, Gabriel Kadiwa, Codexplorer, Techno Brain, React, Django, Java, Spring Boot"
        />
        <meta property="og:title" content="Gabriel Kadiwa's Professional Experience" />
        <meta
          property="og:description"
          content="Discover Gabriel Kadiwa's expertise in software development, IT support, technical consulting, and tutoring, with experience at Codexplorer, Techno Brain, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrielkadiwa.vercel.app/#experience" />
        <meta property="og:image" content="https://gabrielkadiwa.vercel.app/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gabriel Kadiwa's Professional Experience" />
        <meta
          name="twitter:description"
          content="View Gabriel Kadiwa's professional journey in software development, IT support, technical consulting, and tutoring with leading companies."
        />
        <meta name="twitter:image" content="https://gabrielkadiwa.vercel.app/images/og-image.jpg" />
      </Helmet>
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