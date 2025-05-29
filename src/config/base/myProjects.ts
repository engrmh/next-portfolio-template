import { techStack } from "@/enums/TechStack";
import { IProject } from "@/interfaces/IProject";

// For Projects Slider
export const projects:IProject[] = [
  {
    title: "Koushyar School App",
    desc: "Koushyar School Management Web Application ",
    img: "1.webp",
    stacks: [
      techStack.nextjs,
      techStack.js,
      techStack.mongodb,
      techStack.tailwindcss,
      techStack.react,
      techStack.mui,
    ],
  },
  {
    title: "Cofe Menu",
    desc: "Godfather Digital Cofe Menu",
    img: "2.webp",
    stacks: [
      techStack.html,
      techStack.css,
      techStack.webpack,
      techStack.js,
      techStack.cloudflare,
    ],
  },
  {
    title: "Prices Board",
    desc: "Gold Borad Prices",
    img: "3.webp",
    stacks: [
      techStack.react,
      techStack.bootstrap,
      techStack.ts,
      techStack.express,
    ],
  },
  {
    title: "Nexura",
    desc: "Cofe Management System",
    img: "4.webp",
    stacks: [
      techStack.react,
      techStack.redux,
      techStack.tailwindcss,
      techStack.mui,
      techStack.express,
      techStack.nodejs,
      techStack.ts,
      techStack.prisma,
      techStack.sqlite,
      techStack.electron,
    ],
  },
  {
    title: "Book Search Engine",
    desc: "Tehran Bookfair Book Search Engine",
    img: "5.webp",
    stacks: [
      techStack.react,
      techStack.nextjs,
      techStack.tailwindcss,
      techStack.mongodb,
      techStack.redux,
      techStack.mui,
    ],
  },
  {
    title: "Eco Trade Damon",
    desc: "Eco Trading Damon Trade Company Wordpress Site",
    img: "66.webp",
    stacks: [techStack.wordpress, techStack.cloudflare],
  },
  // {
  //   title: "",
  //   desc: "",
  //   img: "",
  //   stacks: [],
  // },
];