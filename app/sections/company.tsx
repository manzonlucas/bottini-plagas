import { Wave } from "../components/wave";
import { SectionWrapper } from "../sectionWrapper";
import { SkewedText } from "../components/skewedText";
import { siteConfig } from "../config/site";
import { CarouselImages } from "../components/carousel-images";
import { title } from "../components/primitives";

const data = [
  {
    title: "Empresa familiar",
    content:
      "Bottini Plagas es una empresa familiar de la ciudad de Pergamino que cuenta con más de 30 años de trayectoria en el rubro.",
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
      classnames="hero-background relative gap-8 pt-20 lg:pt-0 w-full lg:h-screen"
      id={siteConfig.navItems[2].label.toLowerCase()}
    >
      <Wave color="text-primary" version={2} />

      <div className="container flex flex-col items-center w-4/5 gap-4 overflow-hidden rounded-md lg:flex-row lg:h-2/3">
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-4 p-4 text-center rounded-md bg-primary lg:p-12">
          <h2 className={`${title()} z-10`}>Nosotros</h2>
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

        <div className="container relative flex flex-col items-center h-64 lg:h-full">
          <div className="flex items-center justify-center w-full h-full">
            <CarouselImages />
          </div>
        </div>
      </div>
      <Wave color="text-primary" version={1} />
    </SectionWrapper>
  );
};
