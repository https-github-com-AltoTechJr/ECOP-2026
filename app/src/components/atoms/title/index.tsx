import React from 'react'

interface TitleTypes {
    text: string,
    fontSize?: string,
    fontSizeMd?: string,
    showHr?: boolean
}

export default function Title({ text, fontSize, fontSizeMd, showHr } : TitleTypes) {
  return (
    <>
        <h2 className={`font-press_start ${fontSize ?? 'text-[2rem]'} ${fontSizeMd ?? 'md:text-[1.5rem]'} font-bold`}>{text}</h2>

        {showHr && (
            <div className="flex w-full justify-center items-center mt-4">
                <span className="w-32 h-1.5 bg-tertiary"></span>
            </div>
        )}
    </>
  )
}

