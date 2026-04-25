import React from 'react'

interface BlueBlockColors {
  primary?: string,
  secondary?: string,

  top?: string,
  topSm?: string,
  topMd?: string

  right?: string,
  rightSm?: string,
  rightMd?: string
}

export default function BlueBlocks({ primary, secondary, top, topSm, topMd, right, rightSm, rightMd } : BlueBlockColors) {
  return (
    <div className={`absolute ${top ?? 'top-12'} ${topSm ?? 'sm:top-5'} ${topMd ?? 'md:top-[2.2rem]'} ${rightMd ?? 'md:right-[6.4rem]'} ${right ?? 'right-6'} ${rightSm ?? 'sm:right-10'} grid grid-cols-2`}>
      
      {/* topo */}
      <div className="col-span-1 flex justify-center pixel-stack">
        <div 
        style={{
          '--x': '22px',
          '--y': '-12px',
          animationDuration: '2s',
          animationDelay: '1s'
        } as React.CSSProperties}
        className={`w-10 h-10 sm:w-14 sm:h-14 ${primary ?? 'bg-quaternary'} pixel-stack`}>
            
        </div>
        
      </div>

      {/* esquerda */}
      <div 
        className={`w-10 sm:w-14 h-10 sm:h-14 ${secondary ?? 'bg-light-blue'} pixel-stack`}
        style={{
          '--x': '22px',
          '--y': '-12px',
          animationDuration: '2s',
          animationDelay: '2s'
        } as React.CSSProperties}
      />

    </div>
  )
}