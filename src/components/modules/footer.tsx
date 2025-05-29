"use client";
import { terminalBar } from "@/config/base/terminalBar";
import CardBoxContainer from "./CardBoxContainer";
import { socials } from "@/config/base/mySocials";
import Link from "next/link";

export default function Footer() {
  return (
    <CardBoxContainer cmd={terminalBar.socials} delay="0">
      <div className="">
        <h2 className="text-center text-xl font-bold animate-pulse">
          CONNECT WITH ME
        </h2>
        <div className="flex justify-center items-center gap-x-3 my-3">
          {socials.map((s, i) => (
            <Link
              key={i}
              href={`/target?url=${s.link}&title=${s.title}`}
              target="_blank"
              className="myBorder text-gray-500 hover:text-gray-300 p-2 rounded-md"
            >
              {s.icon}
            </Link>
          ))}
        </div>
        {/* <div className="border-t border-gray-500"></div> */}
      </div>
    </CardBoxContainer>
  );
}
