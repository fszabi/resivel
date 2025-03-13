'use client'

import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/20/solid'

interface EventData {
  title: string
  start: Date
  end: Date
}

interface CalendarEventProps {
  event: EventData
}

interface Props {
}

const TimeIndicator = () => {
  const now = new Date()
  const hour = now.getHours()
  const minutes = now.getMinutes()
  const top = (hour + minutes / 60) * 48
  
  return (
    <div 
      className="absolute inset-x-0 flex items-center z-20"
      style={{
        top: `${top}px`
      }}
    >
      <div className="h-0.5 w-full bg-blue-600" />
    </div>
  )
}

const CalendarEvent = ({ event }: CalendarEventProps) => {
  const startHour = event.start.getHours() + event.start.getMinutes() / 60
  const endHour = event.end.getHours() + event.end.getMinutes() / 60
  const duration = endHour - startHour
  
  return (
    <div
      className="absolute w-[95%] bg-blue-600 rounded text-xs text-white p-1 cursor-pointer hover:opacity-90 z-10"
      style={{
        top: `${startHour * 48}px`,
        height: `${duration * 48}px`,
      }}
    >
      {event.title}
    </div>
  )
}

const HOURS = Array.from({ length: 24 }, (_, i) => i + 1)
const DAYS_OF_WEEK = ['Vas', 'Hét', 'Kedd', 'Sze', 'Csüt', 'Pén', 'Szo']
const MONTHS = [
  'Január', 'Február', 'Március', 'Április', 'Május', 'Június',
  'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'
]

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentTime, setCurrentTime] = useState(new Date())
  const [events] = useState<EventData[]>([
    {
      title: 'Hajvágás',
      start: new Date(2024, 2, 13, 0, 0),
      end: new Date(2024, 2, 13, 0, 30),
    }
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const navigateWeek = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      newDate.setDate(prev.getDate() + (direction === 'next' ? 7 : -7))
      return newDate
    })
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1))
      return newDate
    })
  }

  const getWeekDates = () => {
    const dates = []
    const startOfWeek = new Date(currentDate)
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay())

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek)
      date.setDate(startOfWeek.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  const formatTime = (hour: number) => {
    return `${hour}:00`
  }

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden text-zinc-900 dark:text-white flex flex-col border border-zinc-200 dark:border-zinc-800">
      <div className="flex justify-between items-center p-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex gap-5">
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-3 py-1 rounded text-sm ml-1 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            Ma
          </button>
          <div className="flex gap-1">
            <button
              onClick={() => navigateWeek('prev')}
              className="px-2 py-1 rounded text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateWeek('next')}
              className="px-2 py-1 rounded text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => navigateMonth('prev')}
              className="px-2 py-1 rounded text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <ChevronDoubleLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateMonth('next')}
              className="px-2 py-1 rounded text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <ChevronDoubleRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="text-base font-normal">
          {`${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="grid grid-cols-[60px_1fr] border-b border-zinc-200 dark:border-zinc-800">
          <div className="border-r border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900" />
          <div className="grid grid-cols-7 bg-zinc-50/50 dark:bg-white/[0.02]">
            {getWeekDates().map((date, index) => {
              const isToday = date.toDateString() === new Date().toDateString()
              return (
                <div key={index} className={`p-2 text-center ${index < 6 ? 'border-r' : ''} border-zinc-200 dark:border-zinc-800`}>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">{DAYS_OF_WEEK[date.getDay()]}</div>
                  <div className={`text-sm ${isToday ? 'text-blue-600' : ''}`}>
                    {date.getDate()}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-[60px_1fr] flex-1 overflow-y-auto">
          <div className="border-r border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 sticky left-0">
            {HOURS.map((hour, index) => (
              <div key={hour} className="h-12">
                <div className={`h-12 flex justify-center items-end text-xs text-zinc-500 dark:text-zinc-400 ${index === HOURS.length - 1 ? 'pb-1' : ''}`}>
                  {formatTime(hour)}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 relative">
            {getWeekDates().map((date: Date, dayIndex: number) => {
              const isToday = date.toDateString() === new Date().toDateString()
              return (
                <div 
                  key={dayIndex} 
                  className={`relative ${dayIndex < 6 ? 'border-r' : ''} border-zinc-200 dark:border-zinc-800 ${
                    isToday ? 'bg-zinc-50/50 dark:bg-white/[0.02]' : ''
                  }`}
                >
                  {HOURS.map((hour, index) => (
                    <div key={hour} className="h-12">
                      <div className={`h-12 ${index < HOURS.length - 1 ? 'border-b border-zinc-200 dark:border-zinc-800' : ''}`} />
                    </div>
                  ))}
                  {isToday && <TimeIndicator />}
                  {events
                    .filter(event => 
                      event.start.getDate() === date.getDate() &&
                      event.start.getMonth() === date.getMonth()
                    )
                    .map((event, index) => (
                      <CalendarEvent key={index} event={event} />
                    ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomCalendar 