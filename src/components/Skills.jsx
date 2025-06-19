import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SiMysql, SiMongodb, SiPostgresql, SiFirebase, SiRedis, SiAmazondynamodb } from "react-icons/si";

import {
  FaHtml5, FaCss3, FaReact, FaPython, FaLinux, FaAws, FaAndroid, FaServer,
  FaDatabase, FaFlask, FaJs, FaGitAlt, FaNetworkWired
} from 'react-icons/fa';

const skillGroups = [
  {
    title: "Web Development",
    icon: FaJs,
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Django", icon: FaServer },
      { name: "Flask", icon: FaFlask }
    ],
    sound: "/sounds/pop.mp3"
  },
  {
    title: "Mobile Development",
    icon: FaAndroid,
    skills: [
      { name: "Flutter", icon: FaAndroid },
      { name: "Kotlin", icon: FaAndroid }
    ],
    sound: "/sounds/pop.mp3"
  },
  {
    title: "Data Science",
    icon: FaPython,
    skills: [
      { name: "R", icon: FaDatabase },
      { name: "Python", icon: FaPython },
      { name: "Pandas", icon: FaDatabase },
      { name: "NumPy", icon: FaDatabase },
      { name: "Matplotlib", icon: FaDatabase },
      { name: "Jupyter", icon: FaDatabase }
    ],
    sound: "/sounds/pop.mp3"
  },
  {
    title: "IT Support & DevOps",
    icon: FaServer,
    skills: [
      { name: "Linux Server", icon: FaLinux },
      { name: "Windows Server", icon: FaServer },
      { name: "Azure", icon: FaAws },
      { name: "AWS", icon: FaAws },
      { name: "Networking", icon: FaNetworkWired },
      { name: "Agile", icon: FaGitAlt }
    ],
    sound: "/sounds/pop.mp3"
  },

  {
  title: "Databases",
  icon: FaServer,
  skills: [
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Firebase", icon: SiFirebase },
    { name: "Redis", icon: SiRedis },
    { name: "Amazon DynamoDB", icon: SiAmazondynamodb },
  ],
  sound: "/sounds/pop.mp3"
}

];

const Skills = () => {
  const sectionRef = useRef(null);
  const soundRefs = useRef([]);

  const [visibleIndex, setVisibleIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleIndex(0);
        } else {
          setVisibleIndex(null); // reset if user scrolls away
        }
      },
      { threshold: 0.5 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  useEffect(() => {
    if (visibleIndex !== null && visibleIndex < skillGroups.length) {
      const timer = setTimeout(() => {
        const sound = soundRefs.current[visibleIndex];
        if (sound) {
          sound.currentTime = 0;
          sound.play().catch(() => {});
        }
        setVisibleIndex(prev => prev + 1);
      }, 500); // delay between each pop

      return () => clearTimeout(timer);
    }
  }, [visibleIndex]);

  return (
    <section id="skills" ref={sectionRef}>
      <h2>Skills</h2>
      <div className="skill-grid">
        {skillGroups.map((group, i) => {
          const GroupIcon = group.icon;
          const isVisible = visibleIndex === null || i < visibleIndex;

          return (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3><GroupIcon /> {group.title}</h3>
              <ul>
                {group.skills.map((skill, idx) => (
                  <li key={idx}>
                    <skill.icon style={{ marginRight: 8 }} />
                    {skill.name}
                  </li>
                ))}
              </ul>
              <audio ref={el => soundRefs.current[i] = el} src={group.sound} preload="auto" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
