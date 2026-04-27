'use client'

import { Schedule } from '@/app/lib/types'
import Image from 'next/image'
import { CiClock2 } from "react-icons/ci";

interface ProgramacaoCardTypes {
    bgColor?: string, /* Background color of CONTAINER */
    borderColor?: string, /* Border Color of CONTAINER */
    highlighted?: string, /* Color of weekDay  */
    hrColor?: string, /* Color of HR, below the weekDay */
    firstLeftBlockColor?: string, /* Background color of first decoration block */
    sencondLeftBlockColor?: string, /* Background color of second decoration block */
    imgBlock: string, /* URL of the image inside of the block */
    evenBg?: string, /* Color of EVEN schedules */
    localBg?: string, /* Color of LOCAL CONTAINER */
    weekDay?: string, /* STRING week's day */
    schedule: Schedule[] /* PROGRAMMATION */
}

export default function ProgramacaoCard(
    { 
        bgColor, 
        borderColor, 
        highlighted,
        hrColor,
        firstLeftBlockColor,
        sencondLeftBlockColor, 
        imgBlock,
        evenBg, 
        localBg,
        weekDay, 
        schedule 

    } : ProgramacaoCardTypes) {
  return (
    /* WRAPPER */
    <div className='flex flex-col justify-center items-center mb-10'>
        {/* CONTAINER */}
        <div className={`w-[98%] sm:w-[90%] md:w-[86%] xl:max-w-[70%] p-4 ${bgColor || 'bg-light-mint'} border-6 ${borderColor || 'border-light-sea-green'}`}>
            {/* CONTAINER HEADER */}
            <div className='flex w-full justify-between items-center'>
                {/* Blocks */}
                <div className='flex'>
                    <div className={`${firstLeftBlockColor || 'bg-tertiary'} h-14 w-16 sm:h-20 sm:w-22`}></div>
                    <div className={`flex justify-center items-center ${sencondLeftBlockColor || 'bg-mint'} h-14 w-16 sm:h-20 sm:w-22`}>
                        <Image 
                        className='h-8 w-8 sm:h-10 sm:w-10'
                        src={imgBlock}
                        alt="Decoração"
                        height={40}
                        width={40}
                        priority={false}
                        quality={65} />
                    </div>
                </div>
                
                <div className='w-full relative'>
                    <h2 className={`ml-4 ${highlighted || 'text-tertiary'} font-press_start text-[1rem] sm:text-2xl`}>{weekDay || 'Dia - Data'}</h2>
                    <span className={`ml-4 absolute ${hrColor || 'bg-tertiary'} -bottom-1 h-1 w-full`}></span>
                </div>

                <Image 
                className='ml-6 h-6 w-6 animate-bounce'
                src="/heart.svg" 
                alt="Coração"
                height={24}
                width={24}
                priority={false}
                quality={65} />

            </div>

            {/* CONTAINER PROGRAMACAO */}
            {schedule.map((item, index) => (
                <div key={index} className={`relative mt-8 sm:flex h-28 sm:h-16 w-full sm:items-center py-2 px-2 ${index % 2 === 0 ? (evenBg || 'bg-mint') : 'bg-transparent'}`}>
                    <span className='flex items-center gap-1 sm:text-nowrap sm:pr-2'>
                        <CiClock2 /> {item.time}
                    </span>
                    <p className='w-full text-[.9rem] text-justify text-neutral px-4 sm:px-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div className='absolute bottom-2 right-1 sm:flex sm:relative sm:bottom-0 sm:right-0 sm:justify-end'>
                        <span className={`${localBg || 'bg-tertiary'} text-white text-[.8rem] text-center sm:text-nowrap p-1 sm:p-2`}>{item.local}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

