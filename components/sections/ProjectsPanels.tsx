"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { liveLanguages, liveProjects } from "@/lib/data/liveProjects";
import type { GithubRepo } from "@/lib/github";
import PixelPanel from "@/components/ui/PixelPanel";
import PixelButton from "@/components/ui/PixelButton";

interface ProjectsPanelsProps {
  repos: GithubRepo[];
  githubLanguages: string[];
}

const selectClasses =
  "pixel-border-sm w-full max-w-[200px] bg-bg text-fg font-sans text-sm px-3 py-2 mb-4";

export default function ProjectsPanels({ repos, githubLanguages }: ProjectsPanelsProps) {
  const [selectedGithubLang, setSelectedGithubLang] = useState("All");
  const [selectedLiveLang, setSelectedLiveLang] = useState("All");
  const [previewUrl, setPreviewUrl] = useState("");

  const filteredGithubRepos =
    selectedGithubLang === "All" ? repos : repos.filter((repo) => repo.language === selectedGithubLang);

  const filteredLiveProjects =
    selectedLiveLang === "All" ? liveProjects : liveProjects.filter((p) => p.language === selectedLiveLang);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LIVE PROJECTS */}
      <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h3 className="font-pixel text-[0.7rem] text-accent2 mb-3">▶ LIVE STAGES</h3>
        <select
          value={selectedLiveLang}
          onChange={(e) => setSelectedLiveLang(e.target.value)}
          className={selectClasses}
        >
          {liveLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <ul className="flex flex-col gap-2 mb-4">
          {filteredLiveProjects.map((proj) => (
            <li key={proj.url}>
              <button
                onClick={() => setPreviewUrl(proj.preview)}
                className={`pixel-border-sm w-full text-left px-3 py-2 font-sans text-sm ${
                  previewUrl === proj.preview ? "bg-accent text-bg" : "bg-elevated text-fg"
                }`}
              >
                {proj.name}
              </button>
            </li>
          ))}
        </ul>

        {previewUrl && (
          <PixelPanel className="p-2">
            <iframe src={previewUrl} title="Live Preview" className="w-full h-[300px] border-0" allow="fullscreen" />
            <div className="mt-2 text-center">
              <PixelButton href={previewUrl} target="_blank" rel="noreferrer">
                🌐 VIEW FULL SITE
              </PixelButton>
            </div>
          </PixelPanel>
        )}
      </motion.div>

      {/* GITHUB REPOS */}
      <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
        <h3 className="font-pixel text-[0.7rem] text-accent2 mb-3">▶ SIDE QUESTS</h3>
        <select
          value={selectedGithubLang}
          onChange={(e) => setSelectedGithubLang(e.target.value)}
          className={selectClasses}
        >
          {githubLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredGithubRepos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <PixelPanel className="pixel-corners h-full text-sm">
                <h4 className="font-pixel text-[0.6rem] text-accent mb-2">{repo.name}</h4>
                <p className="font-sans text-fg/80 mb-2">{repo.description}</p>
                {repo.language && <p className="font-sans text-xs text-accent2 mb-2">{repo.language}</p>}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  <FaGithub /> View Repo
                </a>
              </PixelPanel>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
