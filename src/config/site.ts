import { ISiteConfig } from "@/interfaces/ISiteConfig";
import { codeTimeSection } from "./base/myCodeTimeSection";
import { features } from "./base/myFeatures";
import { posts } from "./base/myForeignPosts";
import { projects } from "./base/myProjects";
import { socials } from "./base/mySocials";
import { stacks } from "./base/myStacks";

// export type SiteConfig = typeof siteConfig;

const base = { projects, posts, features, socials, stacks, codeTimeSection };

export const siteConfig: ISiteConfig = {
  ...base,

  //
  name: "Mohammad Hosein Salimbahrami",
  description: "Full Stack (MERN)",
  github_Username: "engrmh",
  url: "https://skylax.vercel.app",
  icon: "/favicon.png",
  socialImage: "/favicon.png",
  navbarTitle: [
    "Engr.MH",
    "Mohammad Hosein Salimbahrami",
    "Frontend Developer",
    "Full Stack (MERN)",
  ],
  abouts: [
    `👋 Hi there! I'm a Full Stack developer specializing in MERN
            (MongoDB, Express.js, React.js, Node.js) technology stack, as well
            as a UI designer. With several years of experience in the field, I
            leverage my knowledge and expertise to develop and optimize web
            applications tailored to your business needs.`,
    `💡 Passionate about staying updated with the latest technologies and
            development approaches, I'm always keen on learning and updating my
            skills to provide the best solutions for your projects.`,
    `🎨 Furthermore, with experience and expertise in UI design, I can
            create outstanding user experiences for your products, helping your
            business enhance its competitive edge in the market.`,
    `🤝 With strong technical skills and extensive experience, I'm ready
            to join your team and contribute to the advancement of your
            projects. Together, we can turn your ideas into reality and make a
            positive impact in the world.`,
    `📬 Feel free to reach out if you'd like to discuss further or
            explore collaboration opportunities.`,
  ],
};
