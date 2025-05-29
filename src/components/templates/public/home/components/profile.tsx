"use client";
import CardBoxContainer from "@/components/modules/CardBoxContainer";
import Image from "next/image";
import Link from "next/link";
import style from "@/styles/home/profile.module.css";
import { useHomeCtx } from "../context";
import { Skeleton } from "@heroui/skeleton";
import { siteConfig } from "@/config/site";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { terminalBar } from "@/config/base/terminalBar";

export default function Profile() {
  const { githubData } = useHomeCtx();
  return (
    <CardBoxContainer cmd={terminalBar.info} delay="0">
      <div className="">
        <div className="flex gap-x-4">
          {githubData ? (
            <Image
              width={80}
              height={80}
              unoptimized
              quality={80}
              src={githubData?.avatar_url}
              alt="MH Photo"
              className="rounded-md !w-20 !h-20"
            />
          ) : (
            <Skeleton className="rounded-md !w-20 !h-20">
              <div className="rounded-md bg-default-300 !w-20 !h-20" />
            </Skeleton>
          )}

          <div className="">
            <h1 className="text-2xl font-bold">{siteConfig.name}</h1>
            <h1 className="">{siteConfig.description}</h1>
          </div>
        </div>
        <ScrollShadow
          hideScrollBar
          className="my-6 h-52 overflow-y-auto flex flex-col gap-y-2 border-l-2 pl-2 border-gray-300 cursor-default"
        >
          {siteConfig.abouts.map((a, i) => (
            <p className="text-wrap" key={i}>
              {a}
            </p>
          ))}
        </ScrollShadow>
        <div className="flex justify-between items-center gap-x-2">
          {siteConfig.socials.map((item, i) => (
            <Link
              key={i}
              href={`/target?url=${item.link}&title=${item.title}`}
              target="_blank"
              className={`border border-gray-600 hover:border-gray-300 hover:bg-black transition-all w-full py-2 ${style.socialContainer}`}
            >
              <div className={`${style.socialCmd}`}>
                <span className="">$ ssh {item.title.toLowerCase()}</span>
                <span className="border-l-2 pl-1 border-green-500 leading-none">
                  connecting...
                </span>
              </div>
              <div
                className={`flex flex-col justify-center items-center ${style.socialIcon}`}
              >
                <span className="">{item.icon}</span>
                <span className="text-[0.7rem] mt-2 font-bold">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </CardBoxContainer>
  );
}
