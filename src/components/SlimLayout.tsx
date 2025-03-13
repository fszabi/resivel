'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import auth_1 from '/public/assets/auth_1.jpg'
import auth_2 from '/public/assets/auth_2.jpg'
import auth_3 from '/public/assets/auth_3.jpg'
import auth_4 from '/public/assets/auth_4.jpg'
import auth_5 from '/public/assets/auth_5.jpg'
import auth_6 from '/public/assets/auth_6.jpg'

export function SlimLayout({ children }: { children: React.ReactNode }) {
  const [currentPair, setCurrentPair] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  const imagePairs = [
    {
      images: [
        { src: auth_1, alt: "barber" },
        { src: auth_2, alt: "edző" }
      ]
    },
    {
      images: [
        { src: auth_3, alt: "körmös" },
        { src: auth_4, alt: "körmök" }
      ]
    },
    {
      images: [
        { src: auth_5, alt: "masszázs" },
        { src: auth_6, alt: "köpölyözés" }
      ]
    }
  ]

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    let timeoutId: NodeJS.Timeout
    let intervalId: NodeJS.Timeout

    const startTransition = () => {
      if (!isMounted) return
      
      setIsTransitioning(true)
      timeoutId = setTimeout(() => {
        if (!isMounted) return
        setCurrentPair((prev) => (prev + 1) % imagePairs.length)
        setIsTransitioning(false)
      }, 500)
    }
    
    intervalId = setInterval(startTransition, 10000)

    return () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
  }, [isMounted, imagePairs.length])

  return (
    <>
      <main className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-zinc-100 px-4 py-10 text-zinc-900 shadow-2xl dark:bg-zinc-900 dark:text-white sm:justify-center md:flex-none md:px-28">
          <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">{children}</main>
        </div>
        <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
          <div>
            <Image
              src={imagePairs[currentPair].images[0].src}
              alt={imagePairs[currentPair].images[0].alt}
              className={`absolute left-24 top-24 z-50 w-1/2 rounded-lg max-xl:hidden 2xl:w-2/5 transition-all duration-1000 ease-in-out ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            />
            <Image
              src={imagePairs[currentPair].images[1].src}
              alt={imagePairs[currentPair].images[1].alt}
              className={`absolute bottom-24 right-24 z-50 w-1/2 rounded-lg max-xl:hidden 2xl:w-2/5 transition-all duration-1000 ease-in-out ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            />
          </div>
          <div className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_center,_#60a5fa_0%,_#2563eb_45%,_#1e40af_100%)]" />
        </div>
      </main>
    </>
  )
}
