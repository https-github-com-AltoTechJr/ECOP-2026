'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import UseViewport from '@/app/hooks/UseViewport';

interface TypeImages {
  name: string,
  link: string
} 

interface EmblaCarouselProps {
  images: TypeImages[] | null
  showArrows?: boolean
}

export function EmblaCarousel({ images, showArrows = false }: EmblaCarouselProps) {
  const viewport = UseViewport()

  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  ).current


  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: viewport ? 'start' : 'center'
  }, [autoplay])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!emblaApi) return

    
    setScrollSnaps(emblaApi.scrollSnapList())
    setSelectedIndex(emblaApi.selectedScrollSnap())

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  return (
    <div className="h-100 w-full flex flex-col items-center gap-6">

      {/* CARROSSEL + SETAS */}
      <div className="relative h-full w-full max-w-[95%] sm:max-w-[80%] md:max-w-[80%]">

        {/* SETA ESQUERDA */}
        {showArrows && (
          <>
            <div 
              className="absolute hidden sm:flex inset-y-0 -left-20 items-center justify-center z-10 ">
              <Image
                onClick={() => emblaApi?.scrollPrev()}
                src='/arrow-left.svg'
                alt='Arrow Left'
                width={24}
                height={24}
                className={`h-12 sm:h-12 w-full rounded-[10px] object-contain cursor-pointer hover:scale-125`}
                priority={false}
                quality={65}
              />
            </div>
          </>
        )}

        {/* EMBLA */}
        <div ref={emblaRef}
           className="overflow-hidden">
          <div className="flex mt-16">
            {images?.map((src, index) => (
              <div
                key={index}
                className="flex-[0_0_60.333%] sm:flex-[0_0_56.333%] md:flex-[0_0_53.333%] lg:flex-[0_0_30.333%] mr-10 gap-10 flex justify-center"
              >
                <div>
                  <Image
                    src={src.link}
                    alt={`Slide ${index + 1}`}
                    width={800}
                    height={288}
                    className={`h-50 sm:h-60 w-full rounded-[10px] object-contain`}
                    priority={index == 0}
                    quality={65}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SETA DIREITA */}
        {showArrows && (
          <div
            className="absolute hidden sm:flex inset-y-0 -right-20 items-center justify-center z-10"
          >
            <Image
              onClick={() => emblaApi?.scrollNext()}
              src='/arrow-right.svg'
              alt='Arrow Right'
              width={24}
              height={24}
              className={`h-12 sm:h-12 w-full rounded-[10px] object-contain cursor-pointer hover:scale-125`}
              priority={false}
              quality={65}
            />
          </div>
        )}

      </div>

      {/* DOTS */}
      <div className="flex relative -top-26 sm:-top-10 justify-center items-center gap-2 flex-wrap max-w-[90%]">
        {images?.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 w-2 transition
              ${index === selectedIndex ? 'bg-black' : 'bg-primary'} cursor-pointer
            `}
          />
        ))}
      </div>


    </div>
  )
}