import { subtitle, title } from "../components/primitives"
import { SectionWrapper } from "../section-wrapper"

export const Services = () => {
  return (
    <SectionWrapper id="services">
      <h2 className={title()}>Servicios</h2>
      <h3 className={subtitle({ class: "mt-4" })}>
        Nuestros servicios
      </h3>
      {/* href={siteConfig.links.github} */}
    </SectionWrapper>
  )
}