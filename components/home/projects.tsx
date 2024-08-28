import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/public/assets/arrow-right.svg";

export const Projects = () => {
  return (
    <section className="space-y-8 pb-16">
      <h3 className="text-2xl">Latest Projects</h3>
      <ul className="w-full space-y-2">
        <li className="px-3 py-4 -mx-3 hover:text-gray-400 duration-300">
          <div className="flex justify-between items-center">
            <div className="space-y-4 md:space-y-2">
              <h3 className="text-lg">Shifty</h3>
              <p>Rota scheduler</p>
            </div>
            <div className="space-y-6 md:space-y-3 text-sm text-inherit">
              <div>
                <Link href={"https://shifty-opal.vercel.app/"} target="_blank">
                  <div className="uppercase hover:text-gray-100 duration-700 flex gap-3 items-center">
                    <Image
                      src={ArrowRight}
                      alt="arrow top on square"
                      className="hidden md:block"
                    />
                    <span>Live site</span>
                  </div>
                </Link>
              </div>
              <div>
                <Link
                  href={"https://github.com/lanzmoncis/rota-builder"}
                  target="_blank"
                >
                  <div className="uppercase hover:text-gray-100 duration-700 flex gap-3 items-center">
                    <Image
                      src={ArrowRight}
                      alt="arrow top on square"
                      className="hidden md:block"
                    />
                    <span>view code</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li className="px-3 py-4 -mx-3 hover:text-gray-400 duration-300">
          <div className="flex justify-between items-center">
            <div className="space-y-4 md:space-y-2">
              <h3 className="text-lg">Audiophile</h3>
              <p>Ecommerce web app</p>
            </div>
            <div className="space-y-6 md:space-y-3 text-sm text-inherit">
              <div>
                <Link
                  href={"https://ecommerce-rust-rho.vercel.app/"}
                  target="_blank"
                >
                  <div className="uppercase hover:text-gray-100 duration-700 flex gap-3 items-center">
                    <Image
                      src={ArrowRight}
                      alt="arrow top on square"
                      className="hidden md:block"
                    />
                    <span>Live site</span>
                  </div>
                </Link>
              </div>
              <div>
                <Link
                  href={"https://github.com/lanzmoncis/ecommerce"}
                  target="_blank"
                >
                  <div className="uppercase hover:text-gray-100 duration-700 flex gap-3 items-center">
                    <Image
                      src={ArrowRight}
                      alt="arrow top on square"
                      className="hidden md:block"
                    />
                    <span>view code</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
