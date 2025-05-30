import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const GITHUB_USERNAME = 'Gabriel265';

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [githubLanguages, setGithubLanguages] = useState(['All']);
  const [selectedGithubLang, setSelectedGithubLang] = useState('All');

  const [selectedLiveLang, setSelectedLiveLang] = useState('All');

  const liveLanguages = ['All','Javascript', 'HTML', 'React',]; // Manually define
  const [previewUrl, setPreviewUrl] = useState('');

  const liveProjects = [
    {
      name: "Portfolio Website",
      url: "https://gabrielkadiw.vercel.app",
      language: "Javascript",
      preview: "https://gabrielkadiw.vercel.app"
    },
    {
      name: "Graphic Designer Portfolio",
      url: "https://gabrielthedesigner.netlify.app",
      language: "HTML",
      preview: "https://gabrielthedesigner.netlify.app"
    },
    {
      name: "Tutor Portfolio Website",
      url: "https://gabriel265.github.io/Gerald_Portfolio/",
      language: "HTML",
      preview: "https://gabriel265.github.io/Gerald_Portfolio/"
    },
    {
      name: "Company Website",
      url: "https://gabriel265.github.io/kadion-systems/",
      language: "React",
      preview: "https://gabriel265.github.io/kadion-systems/"
    }
  ];

  // Fetch GitHub Repos
  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(
          repo => !repo.fork && repo.description
        );

        const langs = new Set(['All']);
        filtered.forEach(repo => {
          if (repo.language) langs.add(repo.language);
        });

        setGithubRepos(filtered);
        setGithubLanguages(Array.from(langs));
      });
  }, []);

  const filteredGithubRepos = selectedGithubLang === 'All'
    ? githubRepos
    : githubRepos.filter(repo => repo.language === selectedGithubLang);

  const filteredLiveProjects = selectedLiveLang === 'All'
    ? liveProjects
    : liveProjects.filter(p => p.language === selectedLiveLang);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">

        {/* 🔗 LIVE PROJECTS PANEL */}
        <motion.div
          className="live-projects"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Live Projects</h3>
          <select
            onChange={e => setSelectedLiveLang(e.target.value)}
            value={selectedLiveLang}
            className="filter-dropdown"
          >
            {liveLanguages.map((lang, idx) => (
              <option key={idx} value={lang}>{lang}</option>
            ))}
          </select>

          <ul className="live-project-list">
            {filteredLiveProjects.map((proj, idx) => (
              <li
                key={idx}
                onClick={() => setPreviewUrl(proj.preview)}
                className={previewUrl === proj.preview ? 'active' : ''}
              >
                {proj.name}
              </li>
            ))}
          </ul>

          {previewUrl && (
  <div className="live-preview">
    <iframe
      src={previewUrl}
      title="Live Preview"
      frameBorder="0"
      allow="fullscreen"
    ></iframe>

    <a
      href={previewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="view-live-btn"
    >
      🌐 View Full Site
    </a>
  </div>
)}

        </motion.div>

        {/* 💻 GITHUB PROJECTS PANEL */}
        <motion.div
          className="github-projects"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>GitHub Repositories</h3>
          <select
            onChange={e => setSelectedGithubLang(e.target.value)}
            value={selectedGithubLang}
            className="filter-dropdown"
          >
            {githubLanguages.map((lang, idx) => (
              <option key={idx} value={lang}>{lang}</option>
            ))}
          </select>

          <div className="repo-grid">
            {filteredGithubRepos.map((repo, idx) => (
              <motion.div
                className="repo-card"
                key={repo.id}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
              >
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
                <p className="language">{repo.language}</p>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <FaGithub /> View Repo
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
