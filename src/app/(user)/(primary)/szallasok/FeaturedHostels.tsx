'use client'

import { Avatar } from '@/components/ui/avatar'
import { Subheading } from '@/components/ui/heading'
import { Link } from '@/components/ui/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import balaton from '/public/assets/favouritehostels/balaton.webp'
import budapest from '/public/assets/favouritehostels/budapest.webp'
import pecs from '/public/assets/favouritehostels/pecs.webp'

const FeaturedHostels = () => {
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
      <Subheading>Kiemelt szállások</Subheading>
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
          className="min-w-[20rem] max-w-[40rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p className="font-semibold">Balaton szállás</p>
          <Avatar className="size-40" src={balaton} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[20rem] max-w-[40rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p className="font-semibold">Budapest szállás</p>
          <Avatar className="size-40" src={budapest} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[20rem] max-w-[40rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p className="font-semibold">Pécs szállás</p>
          <Avatar className="size-40" src={pecs} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[20rem] max-w-[40rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p className="font-semibold">Budapest szállás</p>
          <Avatar className="size-40" src={budapest} />
        </Link>
        <Link
          href="/barbermaster"
          className="min-w-[20rem] max-w-[40rem] space-y-2 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30"
        >
          <p className="font-semibold">Balaton szállás</p>
          <Avatar className="size-40" src={balaton} />
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

export default FeaturedHostels
