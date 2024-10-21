import Image from "next/image";
import { SectionWrapper } from "../sectionWrapper";
import "../hero-background.css";
import { Wave } from "../components/wave";
import { SkewedText } from "../components/skewedText";
import { siteConfig } from "../config/site";
import { WhatsappButton } from "../components/whatsappButton";
import { Carousel } from "../components/carousel";
import SmoothScrollLink from "../components/smoothScrollLink";
import fumigationImg from '../../public/fumigation01.jpg'

export const Home = () => {
  return (
    <SectionWrapper
      classnames="-mt-16 hero-background h-screen relative"
      id="/"
    >
      <div className="container flex items-center w-4/5 overflow-hidden rounded-md h-1/2">
        <div
          className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-8 p-12 text-center bg-primary border-r-primary"
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
          <ul className="flex flex-col gap-4 text-2xl text-gray-700">
            <li className="text-lg">
              Empresa líder de la ciudad de Pergamino, dedicada al manejo integral de plagas, que cuenta con más de 30 años de trayectoria en el rubro.
            </li>
            <li className="text-lg">
              Reconocida por su honestidad, seriedad, compromiso y calidad de los servicios.
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

        <div
          className="container relative flex flex-col items-center h-full"
          style={{ borderLeft: '10px solid #e0e404' }}
        >

          <div
            className="absolute left-0 z-10 w-full h-full top-50 bg-primary "
            style={{ borderLeft: '10px solid #e0e404', clipPath: "polygon(0 0, 0% 0, 15% 0%, 0% 100%)" }}


          />
          <div className="flex items-center justify-center w-full h-full bg-gray-300">
            <Image
              alt=""
              // className="absolute inset-0" // This ensures the image fills the container
              layout="fill"
              objectFit="cover" // This ensures the image covers the entire container
              objectPosition="left"
              src={fumigationImg}
              priority
            />
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold">Empresas que confían en nosotros</h3>
      <Carousel />
      <Wave color="text-primary" version={1} />
      <WhatsappButton />
    </SectionWrapper>
  );
};
