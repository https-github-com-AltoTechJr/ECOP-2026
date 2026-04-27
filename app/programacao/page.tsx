'use client'

import Title from '../src/components/atoms/Title'
import NavBar from '../src/components/molecules/NavBar'
import Footer from '../src/components/molecules/Footer'
import ProgramacaoCard from '../src/components/molecules/ProgramacaoCard'
import { PROGRAMMATION18, PROGRAMMATION19, PROGRAMMATION20 } from './constants'
import Image from 'next/image'
import CloudsAnimation from '../src/components/atoms/AnimationClouds'

export default function Programacao() {
  return (
    <div className='relative bg-[linear-gradient(to_right,#00000039_1px,transparent_1px),linear-gradient(to_bottom,#00000030_1px,transparent_1px)] bg-size-[24px_24px] z-10 overflow-hidden'>
      <NavBar />

      <div className='flex justify-center items-center flex-col mt-28'>
        <Title text='PROGRAMAÇÃO' showHr />
        <p className='my-5 '>Confira a programação completa do evento</p>
      </div>

      <ProgramacaoCard
        weekDay='SEGUNDA-FEIRA - 18/05'
        imgBlock='/guard.svg'
        schedule={PROGRAMMATION18} />

      <ProgramacaoCard
        weekDay='TERÇA-FEIRA - 19/05'
        borderColor='border-alice-blue'
        bgColor='bg-ice-blue'
        evenBg='bg-cloud-blue'
        highlighted='text-alice-blue'
        hrColor='bg-alice-blue'
        firstLeftBlockColor='bg-alice-blue'
        sencondLeftBlockColor='bg-cloud-blue'
        localBg='bg-alice-blue'
        imgBlock='/database.svg'
        schedule={PROGRAMMATION19} />

      <div className='h-350 sm:h-275 w-full absolute top-[50%] -z-10'>
        <Image
          src="/bg-top.webp"
          alt="Imagem de fundo da seção principal do site"
          fill
          priority
          unoptimized
          quality={100}
          sizes="100vw"
          className="object-cover object-top"
        />

        <CloudsAnimation />
      </div>


      <ProgramacaoCard
        weekDay='QUARTA-FEIRA - 20/05'
        borderColor='border-old-gold'
        bgColor='bg-off-white'
        evenBg='bg-blond'
        highlighted='text-bright-gold'
        hrColor='bg-bright-gold'
        firstLeftBlockColor='bg-bright-gold'
        sencondLeftBlockColor='bg-blond'
        localBg='bg-bright-gold'
        imgBlock='/pendrive.svg'
        schedule={PROGRAMMATION20} />

      <Footer />
    </div>
  )
}

