import Image from "next/image";
import { SectionWrapper } from "../section-wrapper";
import NextLink from "next/link";
import '../hero-background.css'

export const Home = () => {
  return (
    <>
      <SectionWrapper id="/" classnames="-mt-16 -mb-24 hero-background">
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
      </SectionWrapper>
      <div>
        <svg className="w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path className="fill-current text-primary" fillOpacity="0.99"
            d="M0,288L60,245.3C120,203,240,117,360,112C480,107,600,181,720,229.3C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </>
  );
};
