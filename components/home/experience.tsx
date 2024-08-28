/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

import NorthcodersLogo from "@/public/assets/northcoderslogo.jpg";

export const Experience = () => {
  return (
    <section className="space-y-8 mb-16">
      <h2 className="text-2xl">Experience</h2>
      <p className="text-pretty">
        Experienced in creating user interfaces and building APIs, from planning
        to implementation and testing. have a strong foundation with the 3
        pillars of the web. Proficient in modern framework React/TypeScript and
        Next for client-side development, and Node and SQL for backend server
        development.
      </p>
      <div className="flex gap-6">
        <div className="w-16 h-16">
          <Image src={NorthcodersLogo} alt="Northcoders" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-lg">Northcoders</h3>
          <p>Software Developer</p>
        </div>
      </div>
    </section>
  );
};
