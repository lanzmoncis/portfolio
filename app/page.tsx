import { Nav } from "@/components/nav/nav";
import { Hero } from "@/components/home/hero";
import { Experience } from "@/components/home/experience";
import { Projects } from "@/components/home/projects";

export default function Home() {
  return (
    <main className="max-w-xs md:max-w-[700px] mx-auto">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
