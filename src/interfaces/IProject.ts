import { techStack } from "@/enums/TechStack";

export interface IProject {
  title: string;
  desc: string;
  img: string;
  stacks: techStack[];
}
