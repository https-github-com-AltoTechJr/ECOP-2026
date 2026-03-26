import React from 'react'

export default function BlueBlocks() {
  return (
    <div className="absolute top-12 sm:top-5 md:top-[2.2rem] right-6 sm:right-10 md:right-[6.4rem] grid grid-cols-2">
      
      {/* topo */}
      <div className="col-span-1 flex justify-center pixel-stack">
        <div 
        style={{
          '--x': '22px',
          '--y': '-12px',
          animationDuration: '2s',
          animationDelay: '1s'
        } as React.CSSProperties}
        className="w-10 h-10 sm:w-14 sm:h-14 bg-quaternary pixel-stack">
            
        </div>
        
      </div>

      {/* esquerda */}
      <div 
        className="w-10 sm:w-14 h-10 sm:h-14 bg-light-blue pixel-stack"
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