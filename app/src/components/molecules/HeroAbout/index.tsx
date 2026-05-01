'use client'

import Image from "next/image";
import CloudsAnimation from "../../atoms/AnimationClouds";
import { motion } from "framer-motion";

const DIV = motion.div
const IMAGE = motion(Image)

interface FloatAnimationProps {
  y1?: number,
  y2?: number,
  y3?: number,
  duration: number
}

const floatAnimation = ({y1, y2, y3, duration} : FloatAnimationProps) => ({
  y: [y1 ?? 0, y2 ?? -20, y3 ?? 0], 
  transition: {
    duration: duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
});


export default function HeroAbout() {
  return (
    <section className="relative w-full h-[800px] sm:h-[800px] xl:h-[700px] font-press_start flex items-center justify-center text-center overflow-hidden">

      <Image
      src="/sky.svg"
      alt="Imagem de fundo da seção principal do site"
      fill
      unoptimized
      priority
      quality={100}
      sizes="100vw"
      className="object-cover object-center"
      />
  
      <CloudsAnimation />
      
      <div className="flex relative justify-center items-center flex-col xl:flex-row w-full max-w-[95%] md:max-w-7xl z-10">
        
        <DIV 
        initial={{ opacity: 0, y: 100 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          type: "spring", stiffness: 50, damping: 10 
        }}
        className="flex justify-center items-center relative h-[300px] w-[300px] md:h-[400px] md:w-[450px] xl:w-full">
          
          {/* FOGUETE */}
          <IMAGE
            src="/rocket.svg"
            alt="Foguete"
            unoptimized
            priority
            className="h-auto w-40 md:w-60 z-20 transition-[width] duration-500 ease-in-out"
            height={250}
            width={250}
            animate={floatAnimation({duration: 2.8})}
          />

          {/* PC */}
          <IMAGE
            src="/pc.svg"
            alt="Computer"
            unoptimized
            className="absolute top-10 md:top-10 xl:top-12 left-2 md:left-12 xl:left-26 h-[4rem] md:h-[6rem] "
            height={90} width={90}
            animate={floatAnimation({y2: -22, duration: 3.5})}
          />

          {/* GRÁFICO */}
          <IMAGE
            src="/graphic.svg"
            alt="Gráfico"
            unoptimized
            className="absolute top-20 right-2 md:top-22 -right-4 md:right-10 xl:top-24 xl:right-26 h-[2.5rem] md:h-[4rem]"
            height={90} width={90}
            animate={floatAnimation({y2: -22, duration: 2})}
          />

          {/* ALVO */}
          <IMAGE
            src="/target.svg"
            alt="Alvo"
            unoptimized
            className="absolute bottom-16 -left-2 md:left-2 xl:left-18 h-[2.5rem] md:h-[4.5rem] "
            height={90} width={90}
            animate={floatAnimation({y2: -22, duration: 2.5})}
          />

          {/* POÇÃO */}
          <IMAGE
            src="/potion.svg"
            alt="Poção"
            unoptimized
            className="absolute bottom-10 md:bottom-10 xl:bottom-10 -right-2  md:right-6 xl:right-22 h-[4rem] md:h-[6rem]"
            height={90} width={90}
            animate={floatAnimation({y2: -22, duration: 2.3})}
          />
        </DIV>

        {/* TEXTO */}
        <div className="flex flex-col relative mt-10 xl:mt-0 gap-4 md:p-4 md:gap-6 text-center xl:text-center transition-all duration-500 ease-in-out">
            <h2 className="text-2xl lg:text-[2rem] leading-14 text-white font-bold text-pixel-outline uppercase">
              Onde talentos se conectam ao futuro da tecnologia
            </h2>
            <p className="lg:text-[1.2rem] text-black/65 max-w-xl mx-auto">
              O ECOP é um evento anual, objetivando levar o conhecimento sobre temas atuais da tecnologia, empreendedorismo, pesquisa e inovação
            </p>
        </div>
      </div>


    </section>
  )
}

