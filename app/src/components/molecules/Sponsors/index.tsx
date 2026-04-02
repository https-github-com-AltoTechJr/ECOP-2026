'use client'

import Title from "../../atoms/Title"
import { EmblaCarousel } from "../Carrosel"
import { ImagesSponsors } from "./constants"

export default function Sponsors() {
  return (
    <section className="mx-auto w-full max-w-360 py-20 bg-quaternary overflow-hidden">

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