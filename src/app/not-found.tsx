import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="h-[60vh] flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-[7rem] font-serif animate-bounce">404</h2>
        <h2 className="text-3xl font-bold mt-6 mb-20 animate-pulse">Page Not Found!</h2>
        <Link href="/" className="myBorder px-5 py-2">
          Home
        </Link>
      </div>
    </div>
  );
}
