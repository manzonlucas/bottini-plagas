import Image from "next/image";
import { SectionWrapper } from "../section-wrapper";
import NextLink from "next/link";
import '../hero-background.css'
import { Wave } from "../components/wave";

export const Home = () => {
  return (
    <SectionWrapper id="/" classnames="-mt-16 hero-background h-screen relative">
      <div className="container flex items-center overflow-hidden rounded-md h-1/2">
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-8 p-12 text-center border-r-5 bg-primary border-r-primary">
          <h1 className="text-6xl italic font-bold text-gray-900 w-fit">BOTTINI</h1>
          <ul className="text-2xl text-gray-700">
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit suscipit accusamus, alias itaque repellendus</li>
          </ul>
          <NextLink href="#contact">
            <div className="px-2 transition-colors duration-200 transform -skew-x-12 bg-default-50 hover:font-bold">
              <p className="text-2xl italic transform skew-x-12">Contactanos</p>
            </div>
          </NextLink>
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
              src={'/main2.jpg'}
              layout="fill"
              objectFit="cover" // This ensures the image covers the entire container
              className="absolute inset-0" // This ensures the image fills the container
              objectPosition="right"
            />
          </div>
        </div>
      </div>
      <Wave color="text-primary" version={1} />
    </SectionWrapper>
  );
};
