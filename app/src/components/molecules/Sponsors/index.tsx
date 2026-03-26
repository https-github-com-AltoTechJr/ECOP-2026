'use client'

import Title from "../../atoms/Title"
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
        <div className="relative text-center text-quinary max-w-240">

          <Title text="CONECTE-SE COM QUEM FAZ ACONTECER" showHr />

          <p className="mt-10">
            Estas são as empresas que estão de olho no seu talento e{' '}
            <span className="font-bold">
              apoiam cada competição e projeto que <br className="hidden **:md:block" /> nasce aqui.
            </span>
          </p>
        </div>

        {/* Cards */}
        <EmblaCarousel images={ImagesSponsors} showArrows={true} />
      </div>
    </section>
  )
}