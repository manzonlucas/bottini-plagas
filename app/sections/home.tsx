import Image from "next/image";
import NextLink from "next/link";

import { SectionWrapper } from "../sectionWrapper";
import "../hero-background.css";
import { Wave } from "../components/wave";
import { SkewedText } from "../components/skewedText";
import { siteConfig } from "../config/site";
import { WhatsappButton } from "../components/whatsappButton";

export const Home = () => {
  return (
    <SectionWrapper
      classnames="-mt-16 hero-background h-screen relative"
      id="/"
    >
      <div className="container flex items-center w-4/5 overflow-hidden rounded-md h-1/2">
        <div
          className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-4 p-12 text-center bg-primary border-r-primary"
          style={{ borderRightWidth: "32px" }}
        >
          <div>
            <h1 className="text-6xl italic font-bold text-gray-900 w-fit">
              BOTTINI
            </h1>
            <SkewedText
              backgroundColor="bg-default-50"
              text="Controladores de plagas"
            />
          </div>
          <ul className="text-2xl text-gray-700">
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum velit suscipit accusamus, alias itaque repellendus
            </li>
          </ul>
          <NextLink href={siteConfig.navItems[3].href.toLowerCase()}>
            <SkewedText
              backgroundColor="bg-default-50"
              classnames="text-2xl bg-default-50 hover:font-bold transition-colors duration-200 transform -skew-x-12 bg-default-50 w-full px-4 py-4"
              text="Contactanos"
            />
          </NextLink>
        </div>

        <div className="container relative flex flex-col items-center h-full">
          <div
            className="absolute left-0 z-10 w-full h-full top-50 bg-primary"
            style={{ clipPath: "polygon(0 0, 0% 0, 15% 0%, 0% 100%)" }}
          />
          <div className="flex items-center justify-center w-full h-full bg-gray-300">
            <Image
              alt=""
              className="absolute inset-0" // This ensures the image fills the container
              layout="fill"
              objectFit="cover" // This ensures the image covers the entire container
              objectPosition="right"
              src={"/main2.jpg"}
            />
          </div>
        </div>
      </div>
      <Wave color="text-primary" version={1} />
      <WhatsappButton />
    </SectionWrapper>
  );
};
