"use client";
import dynamic from "next/dynamic";
import CodeTime from "./components/codeTime";
import Features from "./components/features";
import Posts from "./components/posts";
import Profile from "./components/profile";
import Projects from "./components/projects";
import TechStacks from "./components/techStacks";
import HomeCtxProvider from "./context";
const GihubReview = dynamic(() => import("./components/gihubReview"), {
  ssr: false,
});

export default function Home() {
  return (
    <HomeCtxProvider>
      <div className="flex flex-col gap-y-3">
        {/* 2 cols */}
        <div className="flex justify-stretch flex-wrap md:flex-nowrap gap-3">
          <div className="w-full md:w-1/2">
            <Profile />
          </div>
          <div className="w-full md:w-1/2">
            <GihubReview />
          </div>
        </div>

        {/* 3 cols */}
        <div className=" grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-3">
          <div className="">
            <TechStacks />
          </div>
          <div className="">
            <CodeTime />
          </div>
          <div className="">
            <Projects />
          </div>
        </div>

        {/* 1 col */}
        {/* <div className=""></div> */}

        {/* 2 cols */}
        <div className="flex justify-stretch flex-wrap md:flex-nowrap gap-3">
          <div className="w-full md:w-1/2">
            <Posts />
          </div>
          <div className="w-full md:w-1/2">
            <Features />
          </div>
        </div>
      </div>
    </HomeCtxProvider>
  );
}
