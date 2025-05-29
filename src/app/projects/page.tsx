import Projects from "@/components/templates/public/projects/projects";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export default function ProjectsPage() {
  return (
    <main>
      <Projects />
    </main>
  );
}

export const metadata: Metadata = {
  title: `${siteConfig.name} Projects`,
};
