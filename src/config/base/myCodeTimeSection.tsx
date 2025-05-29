"use client"
import { ICodeTimeSection } from "@/interfaces/ICodeTimeSection";
import { ClockIcon, CodeIcon } from "@phosphor-icons/react";

export const codeTimeSection: ICodeTimeSection = {
  codeTime: [
    {
      title: "Daily Work Time",
      content: "10 h",
      icon: <ClockIcon size={20} />,
    },
    {
      title: "Daily Coding Time",
      content: "3 h",
      icon: <CodeIcon size={20} />,
    },
  ],
  tabs: [
    {
      title: "-languages",
      items: [
        {
          title: "JavaScript",
          progress: 90,
        },
        {
          title: "TypeScript",
          progress: 85,
        },
        {
          title: "Python",
          progress: 20,
        },
        {
          title: "Dart",
          progress: 10,
        },
        {
          title: "C",
          progress: 15,
        },
      ],
    },
    {
      title: "-editors",
      items: [
        {
          title: "VSCode",
          progress: 100,
        },
        {
          title: "WebStorm",
          progress: 80,
        },
        {
          title: "Trae",
          progress: 40,
        },
        {
          title: "Android Studio",
          progress: 10,
        },
        {
          title: "XCode",
          progress: 5,
        },
      ],
    },
    {
      title: "-os",
      items: [
        {
          title: "Linux",
          progress: 80,
        },
        {
          title: "Mac OS",
          progress: 70,
        },
        {
          title: "Windows",
          progress: 50,
        },
        {
          title: "WSL",
          progress: 10,
        },
      ],
    },
  ],
};
