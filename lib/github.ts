import { GITHUB_USERNAME } from "@/lib/constants";

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  fork: boolean;
}

export interface RepoData {
  repos: GithubRepo[];
  languages: string[];
}

/**
 * Server-side fetch of public GitHub repos, revalidated hourly (ISR).
 * Filters out forks and repos without a description, same as the original
 * client-side implementation.
 */
export async function getRepos(): Promise<RepoData> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!res.ok) return { repos: [], languages: ["All"] };

    const data: GithubRepo[] = await res.json();
    const filtered = data.filter((repo) => !repo.fork && repo.description);

    const languages = new Set<string>(["All"]);
    filtered.forEach((repo) => {
      if (repo.language) languages.add(repo.language);
    });

    return { repos: filtered, languages: Array.from(languages) };
  } catch {
    return { repos: [], languages: ["All"] };
  }
}
