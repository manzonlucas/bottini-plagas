import { title } from "../components/primitives";
import { SkewedText } from "../components/skewedText";
import { siteConfig } from "../config/site";
import { SectionWrapper } from "../sectionWrapper";

const data = [
  {
    title: "Manejo integral de plagas",
    content:
      "A través de medidas de control aseguramos la mejora del bienestar de los residentes, la reducción de las enfermedades transmisibles y el mantenimiento de ambientes sanos.",
  },
  {
    title: "Desinfección",
    content:
      "A través de este tratamiento eliminamos microorganismos (virus, bacterias, hongos, etc.) en todo tipo de superficies, con el fin de garantizar la seguridad en el ambiente.",
  },
  {
    title: "Desinsectación",
    content:
      "A partir del cual conseguimos eliminar determinados artrópodos dañinos, principalmente insectos, que constituyen especies no deseadas para la agricultura, ganadería o para las personas.",
  },
  {
    title: "Desratización",
    content:
      "Mediante el cual aseguramos el control de roedores sinantrópicos tanto en zona urbana como rural. Este proceso se lleva a cabo a través de diversos medios químicos  y físicos.",
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
    <SectionWrapper
      classnames="bg-primary h-screen"
      id={siteConfig.navItems[1].label.toLowerCase()}
    >
      <h2 className={title()}>Servicios</h2>
      <div className="grid w-4/5 grid-cols-3 grid-rows-2 gap-8 p-8 text-center rounded-md h-3/4 bg-background hero-background">
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
              <p className="text-sm xl:text-md 2xl:text-large">{element.content}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
