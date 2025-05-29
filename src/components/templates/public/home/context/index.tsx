"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICtxValue } from "./ctxValue";
import { IGithubRes } from "@/interfaces/IGitHubRes";
import { GitHubServices } from "@/services/githubServices";

const HomeContext = createContext<ICtxValue | undefined>(undefined);

export default function HomeCtxProvider({ children }: { children: ReactNode }) {
  const [githubData, setGithubData] = useState<IGithubRes>();
  const { getGithubUserData } = GitHubServices();

  useEffect(() => {
    getGithubData();
  }, []);

  const getGithubData = async () => {
    const res = await getGithubUserData();
    setGithubData(res);
  };
  const ctxValue: ICtxValue = { githubData };
  return (
    <HomeContext.Provider value={ctxValue}>{children}</HomeContext.Provider>
  );
}

export const useHomeCtx = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("context should be use within provider");
  }

  return context;
};
