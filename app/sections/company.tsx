import Image from "next/image";

import { Wave } from "../components/wave";
import { SectionWrapper } from "../section-wrapper";

export const Company = () => {
  return (
    <SectionWrapper
      classnames="hero-background h-screen relative"
      id={"company"}
    >
      <Wave color="text-primary" version={2} />

      <div className="container flex items-center overflow-hidden rounded-md h-1/2">
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-8 p-12 text-center border-r-8 bg-primary border-r-primary">
          <h2 className="text-6xl italic font-bold text-gray-900 w-fit">
            Nosotros
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            iure. Natus ab doloremque a accusantium culpa placeat! Possimus
            accusamus sapiente molestiae sunt ipsum quae maiores numquam dolorum
            unde, voluptatem sed!
          </p>
        </div>

        <div className="container relative flex flex-col items-center h-full">
          <div
            className="absolute left-0 z-10 w-full h-full top-50 bg-primary"
            style={{
              clipPath: "polygon(0 0, 0% 0, 15% 0%, 0% 100%)",
            }}
          />
          <div className="flex items-center justify-center w-full h-full bg-gray-300">
            <Image
              alt=""
              className="absolute inset-0" // This ensures the image fills the container
              layout="fill"
              objectFit="cover" // This ensures the image covers the entire container
              objectPosition="right"
              src={"/main2.jpg"}
            />
          </div>
        </div>
      </div>

      <Wave color="text-primary" version={1} />
    </SectionWrapper>
  );
};
