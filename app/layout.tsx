import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Nav } from "@/components/nav/nav";

import "./globals.css";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lance Moncis",
  description: "Lance Moncis portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen antialiased text-base tracking-wider leading-relaxed text-gray-300 bg-gray-950 ",
          montserrat.className
        )}
      >
        <div className="absolute h-full top-0 z-10 w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <Nav />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
