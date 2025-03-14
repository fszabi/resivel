'use client'

import { Avatar } from '@/components/ui/avatar'
import { Subheading } from '@/components/ui/heading'
import { Link } from '@/components/ui/link'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon as StarIconSolid } from '@heroicons/react/20/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import barberMaster from '/public/assets/favouritestores/barber_master.webp'
import koromszalonPremium from '/public/assets/favouritestores/koromszalon_premium.webp'
import masszazsOazis from '/public/assets/favouritestores/masszazs_oazis.webp'

const FeaturedStores = () => {
  const scrollDiv = useRef<HTMLDivElement>(null)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [isLeftDisabled, setIsLeftDisabled] = useState(true)
  const [isRightDisabled, setIsRightDisabled] = useState(false)
  const { theme } = useTheme()

  let systemTheme = 'light'

  if (typeof window !== 'undefined') {
    systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const themeToUse = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    handleVisibility()
    handleDisability()
  }, [])

  const scroll = (scrollOffset: number) => {
    if (scrollDiv.current) {
      scrollDiv.current.scrollTo({
        left: scrollDiv.current.scrollLeft + scrollOffset,
        behavior: 'smooth',
      })
    }
  }

  const handleVisibility = () => {
    if (scrollDiv.current) {
      setIsOverflowing(scrollDiv.current.scrollWidth > scrollDiv.current.clientWidth)
    }
  }

  const handleDisability = () => {
    if (scrollDiv.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollDiv.current
      setIsLeftDisabled(scrollLeft === 0)
      setIsRightDisabled(scrollLeft === scrollWidth - clientWidth)
    }
  }

  return (
    <div className="relative mt-8 space-y-4">
      <Subheading>Kiemelt üzletek</Subheading>
      {isOverflowing && (
        <button
          className="absolute -left-11 top-[35%] disabled:cursor-not-allowed max-md:-left-7 max-md:hidden"
          onClick={() => scroll(-100)}
          disabled={isLeftDisabled}
        >
          <ChevronLeftIcon
            className="h-12 w-12"
            style={{
              color:
                themeToUse === 'light'
                  ? isLeftDisabled
                    ? '#d4d4d8'
                    : '#27272a'
                  : isLeftDisabled
                    ? '#3f3f46'
                    : '#ececee',
            }}
          />
        </button>
      )}
      <div
        ref={scrollDiv}
        onScroll={handleDisability}
        className="grid snap-x snap-mandatory auto-cols-max grid-flow-col gap-5 overflow-x-auto overscroll-x-contain pb-5 text-center font-medium text-zinc-950 dark:text-white"
      >
        <Link
          href="/barbermaster"
          className="flex min-w-[20rem] max-w-[40rem] items-center gap-3 space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <Avatar className="size-20" src={masszazsOazis} />
          <div className="space-y-1">
            <p className="w-fit font-semibold">Masszázs Oázis</p>
            <p className="flex items-center gap-1">
              <span className="text-sm">4.3</span>
              {[...Array(5)].map((_, index) =>
                index < Math.round(4.3) ? (
                  <StarIconSolid key={index} className="size-4 text-yellow-400" />
                ) : (
                  <StarIconOutline key={index} className="size-4 text-yellow-400" />
                )
              )}
            </p>
          </div>
        </Link>
        <Link
          href="/barbermaster"
          className="flex min-w-[20rem] max-w-[40rem] items-center gap-3 space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <Avatar className="size-20" src={barberMaster} />
          <div className="space-y-1">
            <p className="w-fit font-semibold">Barber Master</p>
            <p className="flex items-center gap-1">
              <span className="text-sm">4.6</span>
              {[...Array(5)].map((_, index) =>
                index < Math.round(4.3) ? (
                  <StarIconSolid key={index} className="size-4 text-yellow-400" />
                ) : (
                  <StarIconOutline key={index} className="size-4 text-yellow-400" />
                )
              )}
            </p>
          </div>
        </Link>
        <Link
          href="/barbermaster"
          className="flex min-w-[20rem] max-w-[40rem] items-center gap-3 space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <Avatar className="size-20" src={koromszalonPremium} />
          <div className="space-y-1">
            <p className="w-fit font-semibold">Körömszalon Premium</p>
            <p className="flex items-center gap-1">
              <span className="text-sm">3.9</span>
              {[...Array(5)].map((_, index) =>
                index < Math.round(4.3) ? (
                  <StarIconSolid key={index} className="size-4 text-yellow-400" />
                ) : (
                  <StarIconOutline key={index} className="size-4 text-yellow-400" />
                )
              )}
            </p>
          </div>
        </Link>
        <Link
          href="/barbermaster"
          className="flex min-w-[20rem] max-w-[40rem] items-center gap-3 space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <Avatar className="size-20" src={masszazsOazis} />
          <div className="space-y-1">
            <p className="w-fit font-semibold">Masszázs Oázis</p>
            <p className="flex items-center gap-1">
              <span className="text-sm">4.3</span>
              {[...Array(5)].map((_, index) =>
                index < Math.round(4.3) ? (
                  <StarIconSolid key={index} className="size-4 text-yellow-400" />
                ) : (
                  <StarIconOutline key={index} className="size-4 text-yellow-400" />
                )
              )}
            </p>
          </div>
        </Link>
        <Link
          href="/barbermaster"
          className="flex min-w-[20rem] max-w-[40rem] items-center gap-3 space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <Avatar className="size-20" src={koromszalonPremium} />
          <div className="space-y-1">
            <p className="w-fit font-semibold">Körömszalon Premium</p>
            <p className="flex items-center gap-1">
              <span className="text-sm">3.9</span>
              {[...Array(5)].map((_, index) =>
                index < Math.round(4.3) ? (
                  <StarIconSolid key={index} className="size-4 text-yellow-400" />
                ) : (
                  <StarIconOutline key={index} className="size-4 text-yellow-400" />
                )
              )}
            </p>
          </div>
        </Link>
      </div>
      {isOverflowing && (
        <button
          className="absolute -right-11 top-[35%] disabled:cursor-not-allowed max-md:-right-7 max-md:hidden"
          onClick={() => scroll(100)}
          disabled={isRightDisabled}
        >
          <ChevronRightIcon
            className="h-12 w-12"
            style={{
              color:
                themeToUse === 'light'
                  ? isRightDisabled
                    ? '#d4d4d8'
                    : '#27272a'
                  : isRightDisabled
                    ? '#3f3f46'
                    : '#ececee',
            }}
          />
        </button>
      )}
    </div>
  )
}

export default FeaturedStores
