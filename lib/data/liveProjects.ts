export interface LiveProject {
  name: string;
  url: string;
  language: string;
  preview: string;
}

export const liveLanguages = ["All", "Javascript", "HTML", "React", "Python"];

export const liveProjects: LiveProject[] = [
  {
    name: "Online Services Firm",
    url: "https://hustle-media.com",
    language: "Javascript",
    preview: "https://hustle-media.com",
  },
  {
    name: "Vehicle Towing Company",
    url: "https://lastmilerecovery.co.uk",
    language: "Javascript",
    preview: "https://lastmilerecovery.co.uk",
  },
  {
    name: "Tourism Website",
    url: "https://holidaymalawi.com",
    language: "Python",
    preview: "https://holidaymalawi.com", // fixed: was missing a slash ("https:/...")
  },
  {
    name: "Online Tutoring Service",
    url: "https://helpinghandtutor.com",
    language: "Javascript",
    preview: "https://helpinghandtutor.com",
  },
  {
    name: "Personal Assitants Services",
    url: "https://helpinghandpa.com",
    language: "Javascript",
    preview: "https://helpinghandpa.com",
  },
  {
    name: "Accountants Consultancy",
    url: "https://helpinghandaccounts.com",
    language: "Javascript",
    preview: "https://helpinghandaccounts.com",
  },
  {
    name: "Portfolio Website",
    url: "https://gabrielkadiwa.vercel.app",
    language: "Javascript",
    preview: "https://gabrielkadiwa.vercel.app",
  },
  {
    name: "Company Website",
    url: "https://kaycee-tutoring.vercel.app",
    language: "Javascript",
    preview: "https://kaycee-tutoring.vercel.app",
  },
  {
    name: "Graphic Designer Portfolio",
    url: "https://gabrielthedesigner.netlify.app",
    language: "HTML",
    preview: "https://gabrielthedesigner.netlify.app",
  },
  {
    name: "Tutor Portfolio Website",
    url: "https://gabriel265.github.io/Gerald_Portfolio/",
    language: "HTML",
    preview: "https://gabriel265.github.io/Gerald_Portfolio/",
  },
  {
    name: "Company Website",
    url: "https://gabriel265.github.io/kadion-systems/",
    language: "React",
    preview: "https://gabriel265.github.io/kadion-systems/",
  },
];
