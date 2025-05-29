"use client";
import { siteConfig } from "@/config/site";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";

import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="bg-transparent">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link className="flex justify-center items-center gap-1" href="/">
            <p className="font-bold text-inherit text-lg">
              <Typewriter
                words={["Welcome To My WebSite", ...siteConfig.navbarTitle]}
                loop={true}
                cursor={true}
                typeSpeed={70}
                deleteSpeed={30}
                cursorBlinking={true}
                cursorStyle="|"
              />
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
    </HeroUINavbar>
  );
};
