"use client";
import { ISocial } from "@/interfaces/ISocials";
import {
  GithubLogoIcon,
  GitlabLogoIcon,
  MicrosoftOutlookLogoIcon,
  TelegramLogoIcon,
  InstagramLogoIcon,
  WhatsappLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

const iconSize: number = 25;

export const socials: ISocial[] = [
  {
    title: "Github",
    link: "https://github.com/engrmh",
    icon: <GithubLogoIcon size={iconSize} />,
  },
  // {
  //   title: "gitlab",
  //   link: "https://gitlab.com/engrmh",
  //   icon: <GitlabLogoIcon size={iconSize} />,
  // },
  {
    title: "Email",
    link: "mailto:en.mohammadhosein@gmail.com",
    icon: <MicrosoftOutlookLogoIcon size={iconSize} />,
  },
  {
    title: "Telegram",
    link: "https://t.me/engr_mh",
    icon: <TelegramLogoIcon size={iconSize} />,
  },
  {
    title: "Instagram",
    link: "https://instagram.com/engr.mh",
    icon: <InstagramLogoIcon size={iconSize} />,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/mohammad-hosein-salimbahrami",
    icon: <LinkedinLogoIcon size={iconSize} />,
  },
  // {
  //   title: "whatsapp",
  //   link: "https://wa.me/+989119193807",
  //   icon: <WhatsappLogoIcon size={iconSize} />,
  // },
];
