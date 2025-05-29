import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Navbar } from "@/components/modules/navbar";
import { siteConfig } from "@/config/site";
import Footer from "@/components/modules/footer";
import { Suspense } from "react";
import AOS from "@/utils/AOSSys";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased"
        )}
      >
        <div>
          <div className="relative flex flex-col h-screen">
            <header>
              <Navbar />
            </header>

            <main className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
              <Suspense fallback={null}>{children}</Suspense>
            </main>
            <footer className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
              <Footer />
            </footer>
          </div>
        </div>
        <AOS />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: "black",
  icons: {
    icon: siteConfig.icon,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.socialImage],
    site: siteConfig.url,
  },
};
