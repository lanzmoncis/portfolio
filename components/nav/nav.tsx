"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const Routes = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/links",
    name: "Links",
  },
  {
    href: "/blogs",
    name: "Blogs",
  },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="mb-12 relative z-20">
      <ul className="flex gap-4 md:gap-6 justify-center px-4 py-3 bg-gray-900/30 rounded-full mt-4 max-w-fit mx-auto">
        {Routes.map((route) => (
          <li key={route.name}>
            <Link href={route.href}>
              <div
                className={cn(
                  "px-4 py-2",
                  pathname === route.href ? "bg-gray-800/40 rounded-full" : ""
                )}
              >
                {route.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
