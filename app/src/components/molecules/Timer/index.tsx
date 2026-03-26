'use client'

import { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'

export function Countdown() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const targetDate = new Date(2026, 4, 18, 0, 0, 0)

  const { days, hours, minutes, seconds } = useTimer({
    expiryTimestamp: targetDate,
    autoStart: true,
  })

  const format = (v: number) => String(v).padStart(2, '0')

  if (!mounted) return null

  return (
    <div className="text-center font-press_start mt-20">

      <div className='grid grid-cols-2 md:flex gap-4 justify-center items-center'>
        <div className='flex flex-col gap-4 px-4 py-[1.9rem] min-w-32 border-light-blue border-[5px] rounded-[5px]'>
          <span className='text-5xl text-light-blue'>{format(days)}</span>
          <span className='text-[.8rem] text-stormy'>Dias</span>
        </div>

        <div className='flex flex-col gap-4 px-4 py-[1.9rem] min-w-32 border-light-blue border-[5px] rounded-[5px]'>
          <span className='text-5xl text-light-blue'>{format(hours)}</span>
          <span className='text-[.8rem] text-stormy'>Horas</span>
        </div>

        <div className='flex flex-col gap-4 px-4 py-[1.9rem] min-w-32 border-light-blue border-[5px] rounded-[5px]'>
          <span className='text-5xl text-light-blue'>{format(minutes)}</span>
          <span className='text-[.8rem] text-stormy'>Minutos</span>
        </div>

        <div className='flex flex-col gap-4 px-4 py-[1.9rem] min-w-32 border-light-blue border-[5px] rounded-[5px]'>
          <span className='text-5xl text-light-blue'>{format(seconds)}</span>
          <span className='text-[.8rem] text-stormy'>Segundos</span>
        </div>
        
      </div>
    </div>
  )
}