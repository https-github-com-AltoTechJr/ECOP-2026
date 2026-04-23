'use client'

import Image from 'next/image'
import Title from '../../atoms/Title'
import { ReactNode } from 'react'

interface ImageAndDescriptionProp {
    title: string,
    description: ReactNode,
    img: string,
    direction?: string
}

export default function ImageAndDescription({ title, description, img, direction } : ImageAndDescriptionProp) {
  return (
    <div className='flex w-full justify-center mt-20 mb-30'>
        <div className={`flex ${direction ?? 'flex-row'} max-w-[90%] md:max-w-[69%] gap-12 xl:gap-20 flex-wrap xl:flex-nowrap`}>
            <div className='flex flex-col gap-2'>
                <Title text={title} fontSize='text-[1.5rem]' fontSizeMd='text-[1.8rem]' showHr  />
                <p className='text-center text-[1.2rem] xl:text-[1rem] mt-4'>{description}</p>
            </div>

            <Image
            src={img}
            alt="Imagem de fundo da seção principal do site"
            priority={false}
            unoptimized
            quality={75}
            height={90}
            width={90}
            className="h-62.5 md:h-87.5 w-full xl:w-100 object-cover"
            />

        </div>
    </div>
  )
}

