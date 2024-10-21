"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// Logos
import threeL from "../../public/clients/3l.png";
import aca from "../../public/clients/aca.png";
import argenmilla from "../../public/clients/argenmilla.png";
import avicoper from "../../public/clients/avicoper.png";
import bioceres from "../../public/clients/bioceres.png";
import cagla from "../../public/clients/cagla.png";
import doneugenio from "../../public/clients/doneugenio.jpg";
import espunia from "../../public/clients/espunia.jpg";
import flicpanificados from "../../public/clients/flicpanificados.jpg";
import lacadireggio from "../../public/clients/lacadireggio.jpg";
import ldistribuciones from "../../public/clients/ldistribuciones.png";
import oca from "../../public/clients/oca.png";
import pardo from "../../public/clients/pardo.jpg";
import raiceshotel from "../../public/clients/raiceshotel.gif";
import rizobacter from "../../public/clients/rizobacter.png";
import seedar from "../../public/clients/seedar.jpg";

const slides = [
  {
    img: threeL,
    alt: "3L",
  },
  {
    img: aca,
    alt: "Aca",
  },
  {
    img: argenmilla,
    alt: "Argenmilla",
  },
  {
    img: avicoper,
    alt: "Avicoper",
  },
  {
    img: bioceres,
    alt: "Bioceres",
  },
  {
    img: cagla,
    alt: "Cagla",
  },
  {
    img: doneugenio,
    alt: "Don Eugenio",
  },
  {
    img: espunia,
    alt: "Espuña",
  },
  {
    img: flicpanificados,
    alt: "Flic Panificados",
  },
  {
    img: lacadireggio,
    alt: "Lacadi Reggio",
  },
  {
    img: ldistribuciones,
    alt: "L Distribuciones",
  },
  {
    img: oca,
    alt: "OCA",
  },
  {
    img: pardo,
    alt: "Pardo",
  },
  {
    img: raiceshotel,
    alt: "Raices Hotel",
  },
  {
    img: rizobacter,
    alt: "Rizobacter",
  },
  {
    img: seedar,
    alt: "Seedar",
  },
];

export const Carousel: React.FC = () => {
  const carouselOptions: EmblaOptionsType = { loop: true };
  const [carouselRef] = useEmblaCarousel(carouselOptions, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  return (
    <div
      ref={carouselRef}
      className="z-10 flex flex-col items-center w-4/5 gap-2 overflow-hidden"
      style={{ userSelect: "none" }}
      // style={{ pointerEvents: "none", userSelect: "none" }}
    >
      <h3 className="text-2xl font-bold">Empresas que confían en nosotros</h3>
      <div className="flex gap-4 pl-4">
        {slides.map((slide, index) => (
          <Image
            key={index}
            alt={slide.alt}
            className="p-4 bg-white rounded-lg"
            height={80}
            src={slide.img}
          />
        ))}
      </div>
    </div>
  );
};
