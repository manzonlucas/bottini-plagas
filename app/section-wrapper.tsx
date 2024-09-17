

interface HomeProps {
  children: React.ReactNode
}

export const SectionWrapper = ({ children }: HomeProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" >
      <div className="justify-center inline-block max-w-xl text-center">
        {children}
      </div>
    </section>
  )
}