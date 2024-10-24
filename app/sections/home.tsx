import Image from "next/image";

import { SectionWrapper } from "../sectionWrapper";
import "../hero-background.css";
import { Wave } from "../components/wave";
import { SkewedText } from "../components/skewedText";
import { siteConfig } from "../config/site";
import { Carousel } from "../components/carousel";
import SmoothScrollLink from "../components/smoothScrollLink";
import fumigationImg from "../../public/fumigation01.jpg";
import { SkewedLogo } from "../components/skewedLogo";

export const Home = () => {
  return (
    <SectionWrapper
      classnames="hero-background relative gap-8 w-full h-screen pt-4 lg:pt-0"
      id="/"
    >
      <div className="container flex flex-col items-center w-4/5 overflow-hidden rounded-md lg:flex-row">
        {/* <div className="h-1/2"> */}
        <div
          className="z-10 flex flex-col items-center justify-center w-full h-full gap-8 p-8 text-center bg-primary "
        // className="relative"
        >
          <SkewedLogo />
          <ul className="flex flex-col gap-4 text-2xl text-gray-700">
            <li className="text-lg">
              Empresa líder de la ciudad de Pergamino, dedicada al manejo
              integral de plagas, que cuenta con más de 30 años de trayectoria
              en el rubro.
            </li>
            <li className="text-lg">
              Reconocida por su honestidad, seriedad, compromiso y calidad de
              los servicios.
            </li>
          </ul>

          <SmoothScrollLink
            className="flex flex-col items-center pb-1"
            href={siteConfig.navItems[3].href.toLowerCase()}
          >
            <SkewedText
              backgroundColor="bg-default-50"
              classnames="text-2xl bg-default-50 hover:font-bold transition-colors duration-200 transform -skew-x-12 bg-default-50 w-full px-4 py-4"
              text="Contactanos"
            />
          </SmoothScrollLink>
        </div>

        <div className="relative flex items-center w-full h-full">
          <div className="w-full h-full">
            <Image
              priority
              alt="Fumigation"
              src={fumigationImg}
              className="object-cover object-left"
              layout="fill"
            />
          </div>
        </div>
      </div>

      <Carousel />
      <Wave color="text-primary" version={1} />
    </SectionWrapper>
  );
};
