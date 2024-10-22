"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// Images
import fumigationImg from "../../public/fumigation02.jpg"
import companyImg01 from "../../public/company/company-img-01.jpeg"
import companyImg02 from "../../public/company/company-img-02.jpeg"
import companyImg03 from "../../public/company/company-img-03.jpeg"

const slides = [
  {
    img: fumigationImg,
    alt: "Fumigation image",
  },
  {
    img: companyImg01,
    alt: "Company image 01",
  },
  {
    img: companyImg02,
    alt: "Company image 02",
  },
  {
    img: companyImg03,
    alt: "Company image 03",
  },
]

export const CarouselImages: React.FC = () => {
  const carouselOptions: EmblaOptionsType = { loop: true };
  const [carouselRef] = useEmblaCarousel(carouselOptions, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  return (
    <div
      ref={carouselRef}
      className="z-10 w-full h-full overflow-hidden"
      style={{ userSelect: "none" }}
    >
      <div className="flex h-full gap-4 pl-4">
        {slides.map((slide, index) => (
          <Image
            key={index}
            alt={slide.alt}
            className="rounded-lg"
            src={slide.img}
          />
        ))}
      </div>
    </div>
  )
}
