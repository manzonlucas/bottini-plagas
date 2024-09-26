'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

export const Carousel: React.FC = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8]
  const carouselOptions: EmblaOptionsType = { loop: true }
  const [carouselRef] = useEmblaCarousel(carouselOptions, [Autoplay({ delay: 2000 })])

  return (
    <div className="w-4/5 overflow-hidden" ref={carouselRef}
      style={{ pointerEvents: 'none', userSelect: 'none' }}
    >
      <div className="flex gap-4 pl-4">
        {slides.map((slide, index) => (
          <div
            className="flex-[0_0_60%] sm:flex-[0_0_40%] lg:flex-[0_0_20%] h-24 bg-gray-200 rounded-md shadow-md flex items-center justify-center"
            key={index}
          >
            <span className="text-2xl font-bold">{slide}</span>
          </div>
        ))}
      </div>
    </div>
  )
}