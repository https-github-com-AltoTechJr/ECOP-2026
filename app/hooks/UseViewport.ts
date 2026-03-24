'use client'

import { useEffect, useState } from 'react'

const UseViewport = (threshold: number = 1000) => {
  const [isAboveThreshold, setIsAboveThreshold] = useState<boolean | null>(null)

  useEffect(() => {
    const checkSize = () => {
      setIsAboveThreshold(window.innerWidth > threshold)
    }

    checkSize() // executa ao montar

    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [threshold])

  return isAboveThreshold
}

export default UseViewport