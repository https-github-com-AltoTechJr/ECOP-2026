'use client'

import Hr from "../../atoms/hr"
import { EmblaCarousel } from "../Carrosel"

const ImagesSponsors = [
  {
    name: 'Nosso Atacarejo',
    link: '/sponsors/card-01.svg'
  },
  {
    name: 'Instituto Sabiá',
    link: '/sponsors/card-02.svg'
  },
  {
    name: 'Github Campus Expert',
    link: '/sponsors/card-03.svg'
  },
  {
    name: 'Nosso Atacarejo',
    link: '/sponsors/card-01.svg'
  },
  {
    name: 'Instituto Sabiá',
    link: '/sponsors/card-02.svg'
  },
  {
    name: 'Github Campus Expert',
    link: '/sponsors/card-03.svg'
  },
  
]

export default function Sponsors() {
  return (
    <section className="w-full py-20 bg-quaternary overflow-hidden">

      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 grid relative justify-items-center">

        {/* Título */}
        <div className="relative text-center text-quinary max-w-[60rem]">
          <h1 className="font-press_start text-[2rem] md:text-[1.5rem] font-bold tracking-widest
          ">
            CONECTE-SE COM QUEM FAZ ACONTECER
          </h1>

          <Hr />

          <p className="mt-10">
            Estas são as empresas que estão de olho no seu talento e{' '}
            <span className="font-bold">
              apoiam cada competição e projeto que <br className="hidden **:md:block" /> nasce aqui.
            </span>
          </p>
        </div>

        {/* Cards */}
        <EmblaCarousel images={ImagesSponsors} showArrows={true} />

        {/* YELLOW BLOCKS */}
        {/* <div className="absolute bottom-1 md:-bottom-[20px] left-3 md:left-[6.4rem] grid grid-cols-3"> 
          <div className="col-span-3 flex justify-center"> 
            <div className="w-10 md:w-10 h-10 md:h-10 bg-yellow-400"></div> 
          </div> 
          <div className=" w-10 md:w-10 h-10 md:h-10 bg-yellow-400"></div> 
          <div className="w-10 md:w-10 h-10 md:h-10 bg-yellow-200"></div> 
          <div className="w-10 md:w-10 h-10 md:h-10 bg-yellow-400"></div> 
        </div> */}
      </div>
    </section>
  )
}