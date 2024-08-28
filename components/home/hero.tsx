/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";

import UserPhoto from "@/public/assets/userphoto.jpg";
import Arrow from "@/public/assets/arrow-up-right-svgrepo-com.svg";

export const Hero = () => {
  return (
    <section className="space-y-12 w-full mb-16">
      <div>
        <h1 className="text-[40px] md:text-7xl tracking-wider md:tracking-normal text-center">
          Hi! I'm Lance.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center justify-center gap-8 w-full">
        <div className="w-52 h-52 rounded-full overflow-hidden mx-auto">
          <Image
            src={UserPhoto}
            alt="User photo"
            className="object-fill"
            priority
          />
        </div>
        <p className="text-pretty">
          Hi there, I'm Lance Moncis, an indie software developer crafting
          visually appealing user interfaces and building products that are both
          functional and easy to use.
        </p>
      </div>
      <div className="flex gap-6 justify-start w-full">
        <div>
          <Link href={"mailto:fuse_readout.0c@icloud.com"}>
            <div className="flex gap-2 items-center">
              <div className="w-[22px] h-[22px]">
                <Image src={Arrow} alt="arrow-up" />
              </div>
              <span>Email me</span>
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/links"}>
            <div className="flex gap-2 items-center">
              <div className="w-[22px] h-[22px]">
                <Image src={Arrow} alt="arrow-up" />
              </div>
              <span>Go to Links</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
