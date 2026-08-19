import { getRepos } from "@/lib/github";
import ProjectsPanels from "@/components/sections/ProjectsPanels";

export default async function Projects() {
  const { repos, languages } = await getRepos();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="font-pixel text-accent text-base sm:text-xl mb-8 text-center">LEVEL SELECT</h2>
      <ProjectsPanels repos={repos} githubLanguages={languages} />
    </section>
  );
}
