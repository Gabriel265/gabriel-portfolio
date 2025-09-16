import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { FaGithub } from 'react-icons/fa';

const GITHUB_USERNAME = 'Gabriel265';

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [githubLanguages, setGithubLanguages] = useState(['All']);
  const [selectedGithubLang, setSelectedGithubLang] = useState('All');
  const [selectedLiveLang, setSelectedLiveLang] = useState('All');
  const liveLanguages = ['All', 'Javascript', 'HTML', 'React', 'Python'];
  const [previewUrl, setPreviewUrl] = useState('');

  const liveProjects = [
    {
      name: "Online Services Firm",
      url: "https://hustle-media.com",
      language: "Javascript",
      preview: "https:/hustle-media.com"
    },
    {
      name: "Vehicle Towing Company",
      url: "https://lastmilerecovery.co.uk",
      language: "Javascript",
      preview: "https:/lastmilerecovery.co.uk"
    },
    {
      name: "Tourism Website",
      url: "https://holidaymalawi.com",
      language: "Python",
      preview: "https:/holidaymalawi.com"
    },
    {
      name: "Online Tutoring Service",
      url: "https://helpinghandtutor.com",
      language: "Javascript",
      preview: "https://helpinghandtutor.com"
    },
    {
      name: "Personal Assitants Services",
      url: "https://helpinghandpa.com",
      language: "Javascript",
      preview: "https://helpinghandpa.com"
    },
    {
      name: "Accountants Consultancy",
      url: "https://helpinghandaccounts.com",
      language: "Javascript",
      preview: "https://helpinghandaccounts.com"
    },
    {
      name: "Portfolio Website",
      url: "https://gabrielkadiwa.vercel.app",
      language: "Javascript",
      preview: "https://gabrielkadiwa.vercel.app"
    },
    {
      name: "Company Website",
      url: "https://kaycee-tutoring.vercel.app",
      language: "Javascript",
      preview: "https://kaycee-tutoring.vercel.app"
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
      <Helmet>
        <title>Projects - Gabriel Kadiwa | Software & Design Portfolio</title>
        <meta
          name="description"
          content="Explore Gabriel Kadiwa's portfolio of software development, graphic design, and tutoring projects, including live websites and GitHub repositories built with React, JavaScript, and HTML."
        />
        <meta
          name="keywords"
          content="software development, graphic design, tutoring, web development, React, JavaScript, HTML, Gabriel Kadiwa, portfolio, GitHub projects"
        />
        <meta property="og:title" content="Gabriel Kadiwa's Project Portfolio" />
        <meta
          property="og:description"
          content="Discover Gabriel Kadiwa's projects in software development, graphic design, and tutoring, featuring live websites and GitHub repositories."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrielkadiwa.vercel.app/#projects" />
        <meta property="og:image" content="https://gabrielkadiwa.vercel.app/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gabriel Kadiwa's Project Portfolio" />
        <meta
          name="twitter:description"
          content="View Gabriel Kadiwa's innovative projects in software development, graphic design, and tutoring, including live websites and GitHub repositories."
        />
        <meta name="twitter:image" content="https://gabrielkadiwa.vercel.app/images/og-image.jpg" />
      </Helmet>
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