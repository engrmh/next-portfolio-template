import { siteConfig } from "@/config/site";
import { IGithubRes } from "@/interfaces/IGitHubRes";

export const GitHubServices = () => {
  const getGithubUserData = async () => {
    const res = await fetch("/api/github");
    const data = await res.json();
    const githubData: IGithubRes = data.data;
    return githubData;
  };

  return {
    getGithubUserData,
  };
};
