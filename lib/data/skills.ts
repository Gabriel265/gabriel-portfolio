import type { IconType } from "react-icons";
import { FaAndroid, FaAws, FaChartLine, FaCloud, FaCss3Alt, FaDatabase, FaHtml5, FaJs, FaNetworkWired, FaReact, FaServer, FaWindows } from "react-icons/fa";
import { SiDjango,SiReact, SiFirebase, SiFlask, SiFlutter, SiJupyter, SiKotlin, SiMongodb, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiPython, SiR, SiRedis } from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  title: string;
  icon: IconType;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Web Development",
    icon: FaJs,
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    title: "Mobile Development",
    icon: FaAndroid,
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Kotlin", icon: SiKotlin },
      { name: "React Native", icon: SiReact },
    ],
  },
  {
    title: "Data Science",
    icon: SiPython,
    skills: [
      { name: "R", icon: SiR },
      { name: "Python", icon: SiPython },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib", icon: FaChartLine },
      { name: "Jupyter", icon: SiJupyter },
    ],
  },
  {
    title: "IT Support & DevOps",
    icon: FaServer,
    skills: [
      { name: "Linux Server", icon: FaServer },
      { name: "Windows Server", icon: FaWindows },
      { name: "Azure", icon: FaCloud },
      { name: "AWS", icon: FaAws },
      { name: "Networking", icon: FaNetworkWired },
      { name: "Agile", icon: FaChartLine },
    ],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Redis", icon: SiRedis },
      { name: "Amazon DynamoDB", icon: FaDatabase },
    ],
  },
];
