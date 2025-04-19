import React from "react";
import "./Certifications.css";
import { FaGoogleDrive } from 'react-icons/fa';

const certificates = [
  {
    title: "Bachelor Of Science in Computer Science",
    issuer: "DMI-St. John the Baptist University",
    issuerUrl: "https://dmisjbu.edu.mw/",
    issueDate: "June 2020",
    skills: "HTML, CSS, C++, Networking",
    preview: "https://drive.google.com/thumbnail?id=11xVs2ZRcIMM9DTx9uyi5Tul0wJh-rEnp",
    viewUrl: "https://drive.google.com/file/d/1Auu95dO4kjq2Qn7SmtFqSkiby5eO3ftt/view?usp=drive_link"
  },
  {
    title: "Android application Development",
    issuer: "Pluralsight",
    issuerUrl: "https://www.pluralsight.com",
    issueDate: "January 2022",
    skills: "Android Studio, Firebase, Kotlin",
    preview: "https://drive.google.com/thumbnail?id=1XqGAZntdfclaWuFL1i_Rk9Um2qU9LmIJ",
    viewUrl: "https://drive.google.com/file/d/1XqGAZntdfclaWuFL1i_Rk9Um2qU9LmIJ/view?usp=drive_link"
  },
  {
    title: "Ethical Hacking and Cybersecurity",
    issuer: "DMI-St. John the Baptist University",
    issuerUrl: "https://dmisjbu.edu.mw/",
    issueDate: "January 2020",
    skills: "Ethical Hacking and Cybersecurity",
    preview: "https://drive.google.com/thumbnail?id=1B5bLqDjx59JMoOprmOpm5sMl5j4fDlZQ",
    viewUrl: "https://drive.google.com/file/d/1B5bLqDjx59JMoOprmOpm5sMl5j4fDlZQ/view?usp=drive_link"
  },
  {
    title: "Ethical Hacking: Hacking Mobile Platforms",
    issuer: "Pluralsight",
    issuerUrl: "https://www.pluralsight.com",
    issueDate: "January 2022",
    skills: "Ethical Hacking and Cybersecurity",
    preview: "https://drive.google.com/thumbnail?id=1JQoeQEXzcu5VB0XR4gO40R7YSX9j0tBL",
    viewUrl: "https://drive.google.com/file/d/1JQoeQEXzcu5VB0XR4gO40R7YSX9j0tBL/view?usp=drive_link"
  },
  {
    title: "Networking Concepts and Protocols",
    issuer: "Pluralsight",
    issuerUrl: "https://www.pluralsight.com",
    issueDate: "January 2022",
    skills: "Networking, WAN, LAN, Wireless",
    preview: "https://drive.google.com/thumbnail?id=1DuMiF3vi6xry4j7wDb2lK1k30EJ2y0mi",
    viewUrl: "https://drive.google.com/file/d/1DuMiF3vi6xry4j7wDb2lK1k30EJ2y0mi/view?usp=drive_link"
  },
  {
    title: "Microsoft Azure Certifications",
    issuer: "Pluralsight",
    issuerUrl: "https://www.pluralsight.com",
    issueDate: "January 2022",
    skills: "Networking, WAN, LAN, Wireless",
    preview: "https://drive.google.com/thumbnail?id=1B6ePaFFiVbXcCySYF9SUTuiNSQVivgCT",
    viewUrl: "https://drive.google.com/file/d/1B6ePaFFiVbXcCySYF9SUTuiNSQVivgCT/view?usp=drive_link"
  },
  {
    title: "Teaching English as a Foreign Language",
    issuer: "TEFL Hero",
    issuerUrl: "https://teflhero.com/",
    issueDate: "January 2022",
    skills: "English, Teaching",
    preview: "https://drive.google.com/thumbnail?id=1QWrx58JujjtNWRNtqM10p_p_vq_k4k7K",
    viewUrl: "https://drive.google.com/file/d/1QWrx58JujjtNWRNtqM10p_p_vq_k4k7K/view?usp=drive_link"
  }
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2 className="cert-title">🎓 Certifications</h2>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-img">
              <img src={cert.preview} alt={`Preview for ${cert.title}`} />
            </div>
            <div className="cert-body">
              <h3>{cert.title}</h3>
              <p><strong>Issuer:</strong> <a href={cert.issuerUrl} target="_blank" rel="noreferrer">{cert.issuer}</a></p>
              <p><strong>Issue Date:</strong> {cert.issueDate}</p>
              {cert.skills && <p><strong>Skills:</strong> {cert.skills}</p>}
              <a href={cert.viewUrl} target="_blank" rel="noreferrer">
                  <FaGoogleDrive /> View Certificate
                </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
