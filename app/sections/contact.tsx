import { subtitle, title } from "../components/primitives"
import { SectionWrapper } from "../section-wrapper"

export const Contact = () => {
  return (
    <SectionWrapper id="contact" classnames="-mb-12">
      <h2 className={title()}>Contacto</h2>
      <h3 className={subtitle({ class: "mt-4" })}>
        Contactanos
      </h3>
      {/* href={siteConfig.links.github} */}
    </SectionWrapper>
  )
}