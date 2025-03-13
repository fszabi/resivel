import { getServices } from '@/data'
import { Metadata } from 'next'
import 'react-day-picker/dist/style.css'
import Reservation from './Reservation'

export const metadata: Metadata = {
  title: 'Barber Master - Foglalás',
}

const ReservationPage = async () => {
  const services = await getServices()

  return <Reservation services={services} />
}

export default ReservationPage
