'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'

type CarouselProps = {
  slides?: number[]
  options?: EmblaOptionsType
}

export const Carousel: React.FC<CarouselProps> = ({ slides = [1, 2, 3, 4, 5], options }) => {
  const [carouselRef] = useEmblaCarousel(options)

  return (
    <div className="flex justify-center w-4/5 gap-16 max-w-7xl" ref={carouselRef}>
      {slides.map((slide, index) => {
        return (
          <div className="border-green-500 h-36 w-36 border-1">Slide 2</div>
        )
      })}
    </div>
  )
}