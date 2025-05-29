import { techStack } from "@/enums/TechStack";
import { IFeatures } from "@/interfaces/IFeatures";

// For Features Section (Just 2 items)
export const features: IFeatures[] = [
  {
    title: "Gold prices data extractor",
    stacks: [techStack.ts, techStack.express, techStack.nodejs],
    image: "goldData.jpg",
  },
  {
    title: "Student score analysis",
    stacks: [techStack.js, techStack.nextjs, techStack.mui],
    image: "analytics.jpg",
  },
];
