'use client'

import { Avatar } from '@/components/catalyst-ui-kit/avatar'
import { Subheading } from '@/components/catalyst-ui-kit/heading'
import { Link } from '@/components/catalyst-ui-kit/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import fordTransit from '/public/assets/favouriterentings/ford_transit.webp'
import hiltiFurokalapacs from '/public/assets/favouriterentings/hilti_furokalapacs.webp'
import volkswagenGolf from '/public/assets/favouriterentings/volkswagen_golf.webp'

const FavouriteRentings = () => {
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
    <div className="relative mt-14 space-y-4">
      <Subheading>Kedvenc bérbeadóid</Subheading>
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
        className="grid snap-x snap-mandatory auto-cols-max grid-flow-col gap-5 overflow-x-auto overscroll-x-contain pb-5 text-center text-sm/6 font-medium text-zinc-950 dark:text-white"
      >
        <Link
          href="/barbermaster"
          className="min-w-[14rem] max-w-[18rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p>Hilti Fúrókalapács</p>
          <Avatar className="size-24" src={hiltiFurokalapacs} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[14rem] max-w-[18rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p>Volkswagen Golf</p>
          <Avatar className="size-24" src={volkswagenGolf} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[14rem] max-w-[18rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p>Hilti Fúrókalapács</p>
          <Avatar className="size-24" src={hiltiFurokalapacs} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[14rem] max-w-[18rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p>Ford Transit Teherautó</p>
          <Avatar className="size-24" src={fordTransit} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[14rem] max-w-[18rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p>Ford Transit Teherautó</p>
          <Avatar className="size-24" src={fordTransit} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[14rem] max-w-[18rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p>Ford Transit Teherautó</p>
          <Avatar className="size-24" src={fordTransit} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[14rem] max-w-[18rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p>Volkswagen Golf</p>
          <Avatar className="size-24" src={volkswagenGolf} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[14rem] max-w-[18rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p>Volkswagen Golf</p>
          <Avatar className="size-24" src={volkswagenGolf} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[14rem] max-w-[18rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p>Hilti Fúrókalapács</p>
          <Avatar className="size-24" src={hiltiFurokalapacs} />
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

export default FavouriteRentings
