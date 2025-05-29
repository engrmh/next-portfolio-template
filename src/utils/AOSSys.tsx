"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AOS() {
  useEffect(() => {
    Aos.init();
  }, []);

  return null;
}
