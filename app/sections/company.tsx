import { subtitle, title } from "../components/primitives"
import { SectionWrapper } from "../section-wrapper"

export const Company = () => {
  return (
    <SectionWrapper id={'company'}>
      <h2 className={title()}>Nosotros</h2>
      <h3 className={subtitle({ class: "mt-4" })}>Nuestra empresa</h3>
    </SectionWrapper>
  )
}