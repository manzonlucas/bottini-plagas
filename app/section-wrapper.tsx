

interface HomeProps {
  children: React.ReactNode
  classnames?: `${string}`
  id?: string
}

export const SectionWrapper = ({ children, id, classnames }: HomeProps) => {
  return (
    <section className={`${classnames} flex flex-col items-center justify-center gap-4`} id={id}>
      {/* <div className="justify-center inline-block text-center"> */}
        {children}
      {/* </div> */}
    </section>
  )
}