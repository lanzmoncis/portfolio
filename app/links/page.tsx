/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";

import UserPhoto from "@/public/assets/userphoto.jpg";
import GithubLogo from "@/public/assets/githubsociallogo.svg";
import InstagramLogo from "@/public/assets/instagramlogo.svg";
import SpotifyLogo from "@/public/assets/spotifylogo.svg";

export default function Links() {
  return (
    <div className="md:max-w-[700px] mx-auto px-4 md:px-0">
      <div className="mt-16">
        <div className="space-y-4 mb-14">
          <div className="w-36 h-36 rounded-full overflow-hidden mx-auto">
            <Image
              src={UserPhoto}
              alt="User photo"
              className="object-fill"
              priority
            />
          </div>
          <div className="text-xl text-center font-medium tracking-wide">
            <h2>@lanzmoncis</h2>
          </div>
        </div>
        <div className="space-y-6">
          <ul className="w-full flex justify-center gap-8 md:gap-11">
            <li>
              <Link href={"https://github.com/lanzmoncis/"} target="_blank">
                <Image src={GithubLogo} alt="Github" width={32} height={32} />
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.instagram.com/lanzmoncis/"}
                target="_blank"
              >
                <Image
                  src={InstagramLogo}
                  alt="Github"
                  width={32}
                  height={32}
                />
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://open.spotify.com/user/31xpjbxfmanbmgez2h4ynqm3ozb4"
                }
                target="_blank"
              >
                <Image src={SpotifyLogo} alt="Github" width={32} height={32} />
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center gap-6 w-full">
            <li className="w-full">
              <Link href={"https://github.com/lanzmoncis/"} target="_blank">
                <div className="py-4 bg-gray-900/80 hover:bg-gray-800/30 duration-300 w-full text-center rounded-2xl">
                  Latest projects
                </div>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href={"https://www.instagram.com/lanzmoncis/"}
                target="_blank"
              >
                <div className="py-4 bg-gray-900/80 hover:bg-gray-800/30 duration-300 w-full text-center rounded-2xl">
                  I take photo sometimes
                </div>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href={
                  "https://open.spotify.com/user/31xpjbxfmanbmgez2h4ynqm3ozb4"
                }
                target="_blank"
              >
                <div className="py-4 bg-gray-900/80 hover:bg-gray-800/30 duration-300 w-full text-center rounded-2xl">
                  Let's make playlist
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
