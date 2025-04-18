import React from 'react';

const certifications = [
  {
    name: 'Ethical Hacking & Cybersecurity',
    link: 'https://drive.google.com/file/d/1e1JiLUfZHtKcC_PyzgLnFqZ1eY0qz7Ow/view?usp=sharing',
    embed: 'https://drive.google.com/file/d/1e1JiLUfZHtKcC_PyzgLnFqZ1eY0qz7Ow/preview'
  },
  {
    name: 'Android Application Development',
    link: 'https://drive.google.com/file/d/1QKTGV_o3nZoUuPfbdcfUur-5lFxLpN2C/view?usp=sharing',
    embed: 'https://drive.google.com/file/d/1QKTGV_o3nZoUuPfbdcfUur-5lFxLpN2C/preview'
  }
];

const Certifications = () => (
  <section id="certifications">
    <h2>Certifications</h2>
    {certifications.map((cert, i) => (
      <div key={i} style={{ marginBottom: '30px' }}>
        <h3>{cert.name}</h3>
        <iframe
          src={cert.embed}
          width="100%"
          height="480"
          allow="autoplay"
          style={{ border: '1px solid #444', borderRadius: '10px' }}
        ></iframe>
        <p><a href={cert.link} target="_blank" rel="noreferrer">View in Google Drive</a></p>
      </div>
    ))}
  </section>
);

export default Certifications;
