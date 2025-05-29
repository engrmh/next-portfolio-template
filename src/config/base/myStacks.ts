import { Level } from "@/enums/Level";
import { techStack } from "@/enums/TechStack";
import { IStacks } from "@/interfaces/IStacks";

// For Stacks Section
export const stacks: IStacks[] = [
  {
    title: "React.JS",
    icon: `${techStack.react}`,
    level: Level.advanced,
  },
  {
    title: "Next.JS",
    icon: `${techStack.nextjs}`,
    level: Level.advanced,
  },
  {
    title: "TypeScript",
    icon: `${techStack.ts}`,
    level: Level.advanced,
  },
  {
    title: "MUI",
    icon: `${techStack.mui}`,
    level: Level.advanced,
  },
  {
    title: "TailwindCSS",
    icon: `${techStack.tailwindcss}`,
    level: Level.advanced,
  },
  {
    title: "Express.JS",
    icon: `${techStack.express}`,
    level: Level.advanced,
  },
  {
    title: "Node.JS",
    icon: `${techStack.nodejs}`,
    level: Level.advanced,
  },
  {
    title: "WebPack",
    icon: `${techStack.webpack}`,
    level: Level.inter,
  },
  {
    title: "MongoDB",
    icon: `${techStack.mongodb}`,
    level: Level.advanced,
  },
  {
    title: "Prisma",
    icon: `${techStack.prisma}`,
    level: Level.inter,
  },
  {
    title: "Figma",
    icon: `${techStack.figma}`,
    level: Level.advanced,
  },
  {
    title: "GraphQL",
    icon: `${techStack.graphql}`,
    level: Level.beginner,
  },
  // {
  //   title: "",
  //   icon: `/images/techStacks/${techStack}`,
  //   level: Level,
  // },
];
