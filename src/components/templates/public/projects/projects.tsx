"use client";
import CardBoxContainer from "@/components/modules/CardBoxContainer";
import Image from "next/image";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { siteConfig } from "@/config/site";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {siteConfig.projects.map((p, i) => (
        <CardBoxContainer
          cmd={`show project ${i + 1}`}
          className=""
          key={i}
          delay="100"
        >
          <Image
            src={`/images/projects/${p.img}`}
            width={300}
            height={200}
            alt={p.title}
            className="w-full h-52"
          />
          <div className="mt-5">
            <h1 className="text-[1.2rem] font-bold">{p.title}</h1>
            <p className="h-12 mt-3">{p.desc}</p>
            <AvatarGroup
              className="mt-3 pl-1"
              max={p.stacks.length > 10 ? 7 : p.stacks.length}
            >
              {p.stacks.map((s, i) => (
                <Avatar key={i} src={s} />
              ))}
            </AvatarGroup>
          </div>
        </CardBoxContainer>
      ))}
      <div className=""></div>
    </div>
  );
}
