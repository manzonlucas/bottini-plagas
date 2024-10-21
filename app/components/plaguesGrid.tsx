import Image from "next/image"
import { SkewedText } from "./skewedText"
// Import images
import ant from '../../public/plagues/ant.jpg'
import bat from '../../public/plagues/bat.jpg'
import cockroaches from '../../public/plagues/cockroaches.jpg'
import fly from '../../public/plagues/fly.png'
import microorganisms from '../../public/plagues/microorganisms.png'
import mite from '../../public/plagues/mite.jpg'
import mosquito from '../../public/plagues/mosquito.jpg'
import moth from '../../public/plagues/moth.jpg'
import pigeon from '../../public/plagues/pigeon.jpg'
import rat from '../../public/plagues/rat.jpg'
import scorpion from '../../public/plagues/scorpion.jpg'
import spider from '../../public/plagues/spider.jpg'

const data = [
  { img: ant, title: "Hormigas", alt: "ant" },
  { img: bat, title: "Murciélagos", alt: "bat" },
  { img: cockroaches, title: "Cucarachas", alt: "cockroaches" },
  { img: fly, title: "Moscas", alt: "fly" },
  { img: microorganisms, title: "Microorganismos", alt: "microorganisms" },
  { img: mite, title: "Ácaros", alt: "mite" },
  { img: mosquito, title: "Mosquitos", alt: "mosquito" },
  { img: moth, title: "Polillas", alt: "moth" },
  { img: pigeon, title: "Aves", alt: "pigeon" },
  { img: rat, title: "Roedores", alt: "rat" },
  { img: scorpion, title: "Alacranes", alt: "scorpion" },
  { img: spider, title: "Arañas", alt: "spider" }
];

export const PlaguesGrid = () => {
  return (
    <>
      {data.map((element, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 rounded-md border-1 bg-default-50"
          >
            <h3>
              <SkewedText
                classnames="font-bold text-xl"
                text={element.title}
              />
            </h3>
            <div className="flex items-center justify-center h-full">
              <Image
                src={element.img}
                alt={element.alt}
                className="text-sm xl:text-md 2xl:text-large"
              />
            </div>
          </div>
        )
      })}
    </>
  )
}