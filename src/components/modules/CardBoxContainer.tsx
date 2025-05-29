"use client";
import { ReactNode } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function CardBoxContainer({
  cmd,
  children,
  className,
  delay,
}: {
  cmd: string;
  children: ReactNode;
  className?: string;
  delay: string;
}) {
  return (
    <div
      className={`myBorder p-3 cardBackGround !m-0 ${className}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h3 className="flex items-center gap-x-2 text-green-500 text-sm font-bold">
        <span>$</span>
        <Typewriter
          words={[cmd]}
          cursor={true}
          typeSpeed={80}
          cursorStyle="_"
        />
      </h3>
      <div color="success" className="mt-3">
        {children}
      </div>
    </div>
  );
}
