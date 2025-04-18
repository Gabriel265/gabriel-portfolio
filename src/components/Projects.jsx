import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Gabriel265/repos")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(repo => !repo.fork);
        setRepos(filtered);
      });
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      {repos.map(repo => (
        <div key={repo.id} className="project-card">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <a href={repo.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
