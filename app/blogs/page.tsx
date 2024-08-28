"use client";

import { useRouter } from "next/navigation";

export default function Blogs() {
  const router = useRouter();

  return (
    <div className="max-w-xs md:max-w-[700px] mx-auto flex flex-col">
      <div className="text-center items-center flex flex-col gap-4 mt-20">
        <div className="w-full">
          <p className="text-lg tracking-wider">
            Blog posts are coming soon...
          </p>
        </div>
        <button
          onClick={() => router.back()}
          className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
