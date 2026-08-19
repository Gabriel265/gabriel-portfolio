export interface NavLevel {
  id: string;
  label: string;
  hudLabel: string;
}

export const navLevels: NavLevel[] = [
  { id: "hero", label: "Home", hudLabel: "START" },
  { id: "about", label: "About", hudLabel: "PLAYER 1" },
  { id: "skills", label: "Skills", hudLabel: "SKILL TREE" },
  { id: "projects", label: "Projects", hudLabel: "LEVEL SELECT" },
  { id: "experience", label: "Experience", hudLabel: "WORLD MAP" },
  { id: "certifications", label: "Certifications", hudLabel: "TROPHY ROOM" },
  { id: "pricing", label: "Pricing", hudLabel: "SHOP" },
  { id: "contact", label: "Contact", hudLabel: "SAVE POINT" },
];
