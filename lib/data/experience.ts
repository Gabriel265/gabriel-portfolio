export interface ExperienceEntry {
  title: string;
  company: string;
  icon: string;
  /** Optional second logo, for entries spanning two closely related companies. */
  icon2?: string;
  period: string;
  tech: string[];
  summary: string;
  detail: string[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "Software Engineer (Contract)",
    company: "NxtGen Labs",
    icon: "/icons/nxtgen.png",
    period: "July 2026 – Present",
    tech: ["USSD", "Chatbots", "Machine Learning", "Python"],
    summary: "Solo-developing a USSD and chatbot solution, plus contributing to ML-powered monitoring systems.",
    detail: [
      "Solo-developing a USSD and chatbot solution.",
      "Contribute as part of a team to eFlood, a water-level early warning system, and a warehouse monitoring system that uses camera-based machine learning to count bags moved.",
      "Design and develop systems end-to-end alongside project delivery.",
      "Tutor students ranging from primary school to college level in programming and Python.",
    ],
  },
  {
    title: "Frontend Engineering Consultant",
    company: "Welloverse",
    icon: "/icons/welloverse.png",
    period: "June 2026 – Present",
    tech: ["React", "Frontend", "Consulting"],
    summary: "Provide frontend engineering consulting.",
    detail: ["Provide frontend engineering consulting."],
  },
  {
    title: "Software Developer, Graphic Designer 👨‍💻",
    company: "Helping Hand PA and Sister Companies",
    icon: "/icons/hh.png",
    period: "June 2025 – Present",
    tech: ["React", "Django", "Vite"],
    summary: "Develope required software services in Django, React, flutter etc.",
    detail: [
      "Lead full-stack development, integrated APIs, and maintained deployment pipelines. Designing Logos and posters, promotional videos etc",
    ],
  },
  {
    // TODO: placeholder start date — replace once confirmed, and re-check this entry's
    // position in the timeline (it's currently ordered as a recent/ongoing role).
    title: "Software Engineer & Project Manager (Freelance)",
    company: "Hustle Media Production (UK) / Worldstart Betting Group",
    icon: "/icons/hustle.png",
    icon2: "/icons/wolrdstar.png",
    period: "July 2025 – Present",
    tech: ["Django", "React", "Gunicorn", "Nginx", "Project Management"],
    summary:
      "Practically the in-house software engineer for a UK media company, and project manager for a Malawi betting group and its sister brands.",
    detail: [
      "Serve, on a freelance basis, as practically the in-house software engineer for a UK-based media production company and its Malawi sister company, Helping Hand PA.",
      "Act as project manager for Malawi-based projects for Worldstart Betting and its sister companies, Top Wager and Castle Bet, overseeing meetings and ongoing project delivery.",
      "Led development of the backoffice systems for Worldstart Betting and Top Wager.",
      "Currently leading a team developing the Top Wager betting site.",
      "Designed and built, solo, an affiliate system and promo code engine for use across the group's betting platforms.",
      "Designed and developed customer and admin apps for a restaurant loyalty program, on a Django multi-tenant backend deployed with gunicorn and nginx.",
      "Oversee server management, requirements gathering in client meetings, and code review across the development team, coordinating work in OpenProject.",
    ],
  },
  {
    title: "Software Developer 👨‍💻",
    company: "Codexplorer Ltd.",
    icon: "/icons/codexplorer.png",
    period: "Sep 2024 – Jul 2025",
    tech: ["React", "Django", "Vite"],
    summary: "Built web apps using Django and React.",
    detail: ["Led full-stack development, integrated APIs, and maintained deployment pipelines."],
  },
  {
    title: "Associate Technical Consultant 🧠",
    company: "Techno Brain Ltd.",
    icon: "/icons/technobrain.png",
    period: "Oct 2020 – Jun 2022",
    tech: ["Java", "Spring Boot", "Azure"],
    summary: "Led enterprise Java systems & client support.",
    detail: ["Designed and deployed e-governance platforms and provided enterprise-level tech consultation."],
  },
  {
    title: "Owner / Lead Developer",
    company: "Websites and Systems Co",
    icon: "/icons/websites.png",
    period: "October 2019 – Present",
    tech: ["Django", "React", "SEO", "Server Management"],
    summary: "Design and develop custom websites and business platforms for startups and small businesses.",
    detail: [
      "Designed and developed custom websites and digital platforms for startups and small businesses.",
      "Built booking systems and business management platforms using Django and React.",
      "Managed server infrastructure including hosting configuration, deployment, and security hardening.",
      "Implemented SEO strategies and analytics monitoring to improve client website visibility.",
      "Provided long-term system maintenance and technical support to clients.",
    ],
  },
  {
    title: "ICT Intern 🖥️",
    company: "UNC Project",
    icon: "/icons/unc.png",
    period: "Oct 2017 – Dec 2019",
    tech: ["Linux", "Networking", "Hardware"],
    summary: "Maintained servers and supported IT systems.",
    detail: ["Installed systems, assisted users, and supported the internal tech team."],
  },
];
