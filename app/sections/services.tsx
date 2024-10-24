import Image from "next/image";

import { PlaguesGrid } from "../components/plaguesGrid";
import { title } from "../components/primitives";
import { SkewedText } from "../components/skewedText";
import { siteConfig } from "../config/site";
import { SectionWrapper } from "../sectionWrapper";
import downArrow from "../../public/down-arrow.png";
import SmoothScrollLink from "../components/smoothScrollLink";

const data = [
  {
    title: "Desinfección",
    content:
      "Se produce la eliminación de agentes infecciosos y contaminantes que se encuentran fuera del organismo, por aplicación directa de medios físicos o químicos.",
  },
  {
    title: "Desinsectación",
    content:
      "Técnica de saneamiento dirigido a eliminar o controlar la población de insectos y otros artrópodos.",
  },
  {
    title: "Desratización",
    content:
      "Técnica de saneamiento que se aplica para la exterminación de roedores.",
  },
  {
    title: "Manejo integral de plagas",
    content:
      "Sistema en el que se integran medidas preventivas y correctivas para mantener el nivel de las plagas en un mínimo tolerable.",
  },
  {
    title: "Actualización",
    content:
      "Nuestro personal está altamente capacitado en normativas de calidad.",
  },
  {
    title: "Control de aves plaga",
    content:
      "A partir de una diversidad de barreras físicas, garantizamos el alejamiento de estas especies. Implementamos un método no invasivo hacia las mismas, logrando su control efectivo.",
  },
];

export const Services = () => {
  return (
    <>
      <SectionWrapper
        classnames="bg-primary pt-20 lg:pt-8 lg:h-screen"
        id={siteConfig.navItems[1].label.toLowerCase()}
      >
        <h2 className={title()}>Nuestros servicios</h2>
        <div className="grid w-4/5 grid-cols-1 grid-rows-1 gap-4 p-4 text-center rounded-md lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 h-3/4 bg-background hero-background">
          {data.map((element, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-4 p-4 rounded-md border-1 bg-default-50"
              >
                <h3>
                  <SkewedText
                    classnames="font-bold text-xl"
                    text={element.title}
                  />
                </h3>
                <p className="text-sm xl:text-md 2xl:text-large">
                  {element.content}
                </p>
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper classnames="bg-primary pt-12 text-center" id={"plagues"}>
        <h2 className={title()}>Principales plagas urbanas</h2>
        <div className="grid w-4/5 grid-cols-1 grid-rows-1 gap-4 p-4 rounded-md lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 lg:p-8 h-3/4 bg-background hero-background">
          {/* "w-4/5 */}
          <PlaguesGrid />
        </div>
      </SectionWrapper>
    </>
  );
};
