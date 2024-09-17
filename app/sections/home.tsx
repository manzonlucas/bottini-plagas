import { subtitle, title } from "../components/primitives"
import { SectionWrapper } from "../section-wrapper"

export const Home = () => {
  return (
    <SectionWrapper>
      <h1 className={title()}>Bottini</h1>
      <h2 className={subtitle({ class: "mt-4" })}>
        Controladores de plagas
      </h2>
      {/* href={siteConfig.links.github} */}
    </SectionWrapper>
  )
}