import { ICodeTimeSection } from "./ICodeTimeSection";
import { IFeatures } from "./IFeatures";
import { IForeignPost } from "./IForeignPosts";
import { IProject } from "./IProject";
import { ISocial } from "./ISocials";
import { IStacks } from "./IStacks";

export interface ISiteConfig {
  name: string;
  description: string;
  github_Username: string;
  url: string;
  icon: string;
  socialImage: string;
  navbarTitle: string[];
  abouts: string[];
  projects: IProject[];
  posts: IForeignPost[];
  features: IFeatures[];
  socials: ISocial[];
  stacks: IStacks[];
  codeTimeSection: ICodeTimeSection;
}
