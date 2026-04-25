import React from 'react'

interface YellowBlocks {
  left?: string,
  leftMd?: string,

  bottom?: string,
  bottomMd?: string
}

export default function YellowBlocks({ left, leftMd, bottom, bottomMd } : YellowBlocks) {
  return (
    <div className={`absolute ${bottom ?? 'bottom-1'} ${bottomMd ?? 'md:bottom-2'} ${left ?? 'left-1'} ${leftMd ?? 'md:left-14'} grid grid-cols-3`}>
      
      {/* topo */}
      <div className="col-span-3 flex justify-center">
        <div className="w-8 sm:w-14 h-8 sm:h-14 bg-yellow-400"></div>
      </div>

      {/* esquerda */}
      <div 
        className="w-8 sm:w-14 h-8 sm:h-14 bg-yellow-400 pixel-stack"
        style={{
          '--x': '42px',
          '--y': '-42px',
          animationDuration: '2s',
          animationDelay: '2s'
        } as React.CSSProperties}
      />

      {/* meio */}
      <div 
        className="w-8 sm:w-14 h-8 sm:h-14 bg-yellow-200 pixel-stack"
        style={{
          '--x': '0px',
          '--y': '-42px',
          animationDuration: '2.2s',
          animationDelay: '1.8s'
        } as React.CSSProperties}
      />

      {/* direita */}
      <div 
        className="w-8 sm:w-14 h-8 sm:h-14 bg-yellow-400 pixel-stack"
        style={{
          '--x': '-42px',
          '--y': '-42px',
          animationDuration: '2.4s',
          animationDelay: '3.5s'
        } as React.CSSProperties}
      />

    </div>
  )
}