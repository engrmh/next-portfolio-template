"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import style from "@/styles/home/posts.module.css";

export default function TargetPage() {
  const url = useSearchParams().get("url");
  const title = useSearchParams().get("title");

  useEffect(() => {
    if (url) {
      const timer = setTimeout(() => {
        window.location.href = url;
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [url, title]);

  return (
    <div className="h-[65vh] flex justify-center items-center">
      <div className="">
        <h2 className="font-bold text-xl text-center animate-pulse">
          You are going to the desired site.
        </h2>

        <h2 className="my-12 text-lg text-center font-bold">{title}</h2>

        <div className="flex justify-center items-center mt-24">
          <div className={style.planet}></div>
        </div>
      </div>
    </div>
  );
}
