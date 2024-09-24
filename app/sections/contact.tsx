import { subtitle, title } from "../components/primitives";
import { SectionWrapper } from "../section-wrapper";

export const Contact = () => {
  return (
    <SectionWrapper classnames="bg-primary h-[calc(100vh-96px)]" id="contact">
      <h2 className={title()}>Contacto</h2>
      <h3 className={subtitle({ class: "mt-4" })}>Contactanos</h3>
      {/* href={siteConfig.links.github} */}
    </SectionWrapper>
  );
};
