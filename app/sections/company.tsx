import Image from "next/image";

import { Wave } from "../components/wave";
import { SectionWrapper } from "../sectionWrapper";
import { SkewedText } from "../components/skewedText";
import { Carousel } from "../components/carousel";
import { siteConfig } from "../config/site";

const data = [
  {
    title: "Empresa familiar",
    content:
      "Bottini Plagas es una empresa familiar de la ciudad de Pergamino que cuenta con más de 20 años de trayectoria en el rubro.",
  },
  {
    title: "Confiabilidad",
    content:
      "Nuestras fortalezas se basan en la transparencia de los servicios, la honestidad y la confiabilidad en el servicio prestado al cliente.",
  },
  {
    title: "Profesionalismo",
    content:
      "Realizamos trabajos de control profesional de plagas en zonas urbanas y rurales, especializándonos en servicios afines a la industria alimentaria.",
  },
];

export const Company = () => {
  return (
    <SectionWrapper
      classnames="hero-background h-screen relative"
      id={siteConfig.navItems[2].label.toLowerCase()}
    >
      <Wave color="text-primary" version={2} />

      <div className="container flex items-center overflow-hidden rounded-md h-1/2">
        <div
          className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-8 p-12 text-center border-r-8 bg-primary border-r-primary"
          style={{ borderRightWidth: "16px" }}
        >
          <h2 className="text-6xl italic font-bold text-gray-900 w-fit">
            Nosotros
          </h2>
          {data.map((data, index) => {
            return (
              <article key={index} className="flex flex-col items-center gap-1">
                <SkewedText
                  backgroundColor="bg-default-50"
                  classnames="text-2xl"
                  text={data.title}
                />
                <p>{data.content}</p>
              </article>
            );
          })}
        </div>

        <div className="container relative flex flex-col items-center h-full">
          <div
            className="absolute left-0 z-10 w-full h-full top-50 bg-primary"
            style={{
              clipPath: "polygon(0 0, 0% 0, 15% 0%, 0% 100%)",
            }}
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

      <h3 className="text-2xl font-bold">Empresas que confían en nosotros</h3>
      <Carousel />
      <Wave color="text-primary" version={1} />
    </SectionWrapper>
  );
};
