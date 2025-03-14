import { Heading } from '@/components/ui/heading'
import type { Metadata } from 'next'
import CustomCalendar from './CustomCalendar'

export const metadata: Metadata = {
  title: 'Naptár',
}

const CalendarPage = async () => {
  return (
    <>
      <Heading>Naptár</Heading>
      <div className="mt-6">
        <CustomCalendar />
      </div>
    </>
  )
}

export default CalendarPage
