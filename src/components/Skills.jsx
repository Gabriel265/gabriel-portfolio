import React from 'react';

const Skills = () => {
  const skills = [
    'Python', 'JavaScript', 'Java', 'PHP', 'Kotlin',
    'React', 'Django', 'Flask', 'Flutter', 'SQL',
    'Linux Server', 'Azure', 'AWS'
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {skills.map((skill, i) => (
          <span key={i} style={{
            background: '#333', padding: '8px 15px', borderRadius: '8px', color: '#ff914d'
          }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
