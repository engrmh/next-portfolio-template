"use client";
import CardBoxContainer from "@/components/modules/CardBoxContainer";
import { terminalBar } from "@/config/base/terminalBar";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { siteConfig } from "@/config/site";

export default function Posts() {
  return (
    <CardBoxContainer cmd={terminalBar.posts} delay="0">
      <ScrollShadow
        hideScrollBar
        className="flex flex-col gap-y-3 h-[18.6rem] overflow-y-auto"
      >
        {siteConfig.posts.map((p, i) => (
          <Link
            href={`/target?url=${p.link}&title=${p.title}`}
            target="_blank"
            className="myBorder p-2 flex justify-between items-center"
            key={i}
          >
            <abbr title={p.title} className="no-underline">
              <h6 className="overflow-hidden whitespace-nowrap text-ellipsis w-64 md:w-96">
                {p.title}
              </h6>
              <h6 className="text-[0.8rem]">- In {p.lang}</h6>
            </abbr>
            <ArrowSquareOutIcon size={18} className="text-gray-400" />
          </Link>
        ))}
      </ScrollShadow>
    </CardBoxContainer>
  );
}
