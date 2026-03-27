'use client'

import dynamic from 'next/dynamic'
import BlueBlocks from '../../atoms/BlueBlocks'
import Title from '../../atoms/Title'
import YellowBlocks from '../../atoms/YellowBlocks'
import Image from "next/image"
import { Spinner } from '@heroui/react';

const Countdown = dynamic(
  () => import('../../molecules/Timer'),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col my-10 items-center gap-2">
        <Spinner color="accent" size="xl" />
      </div>
    ),
  }
)

export default function TimerSection() {
  return (
    <div className="mx-auto p-12 md:p-20 w-full max-w-360 relative flex justify-center items-center flex-col bg-[linear-gradient(to_right,#00000039_1px,transparent_1px),linear-gradient(to_bottom,#00000030_1px,transparent_1px)] bg-size-[24px_24px]">

      <BlueBlocks />

      <Title text='CARREGANDO EVENTO' showHr fontSize='text-[1.1rem] z-10' />

      <Countdown />

      <div className="flex flex-col gap-4 md:flex-row mt-6 justify-center items-center w-full">

        <div className='flex'>
          <Image
            className="w-6 md:w-6 object-contain z-10"
            src='/calendar.svg'
            alt="Calendário"
            height={100}
            width={100}
            priority={false}
          />

          <p className='pl-2 z-10'>15-17 de Maio, 2026</p>
        </div>

        <div className='flex md:ml-4'>
          <Image
            className="w-6 md:w-6 object-contain"
            src='/location.svg'
            alt="Location"
            height={100}
            width={100}
            priority={false}
          />

          <p className='pl-2 whitespace-nowrap'>Centro de Convenções Universitário</p>
        </div>

      </div>

      <div className='flex mt-10 mb-10 flex-col md:flex-row justify-center items-center w-full'>
        <Image
          className="w-40 md:w-30 object-contain"
          src='/Logo.svg'
          alt="Logo"
          height={100}
          width={100}
          priority={false}
        />

        <hr className='hidden md:block bg-gray-400 h-10 w-1 border-none rotate-180 mx-2' />

        <Image
          className="w-44 md:w-44 object-contain"
          src='/ufersa-logo.svg'
          alt="Logo"
          height={100}
          width={100}
          priority={false}
        />
      </div>

      <YellowBlocks />

    </div>
  )
}

