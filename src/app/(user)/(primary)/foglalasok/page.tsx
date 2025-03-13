import { Heading } from '@/components/catalyst-ui-kit/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/catalyst-ui-kit/table'
import { getReservations } from '@/data'
import type { Metadata } from 'next'
import Image from 'next/image'
import logo2 from '/public/assets/logo/logo2.png'

export const metadata: Metadata = {
  title: 'Foglalások',
}

const ReservationsPage = async () => {
  let reservations = await getReservations()

  return (
    <>
      <Heading>Foglalások</Heading>
      <Table className="mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Foglalási szám</TableHeader>
            <TableHeader>Foglalás dátuma</TableHeader>
            <TableHeader>Üzlet</TableHeader>
            <TableHeader>Szolgáltatás</TableHeader>
            <TableHeader className="text-right">Összeg</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation.id} title={`Foglalás #${reservation.id}`}>
              <TableCell>{reservation.id}</TableCell>
              <TableCell className="text-zinc-500">{reservation.date}</TableCell>
              <TableCell>{reservation.businessName}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image className="size-6" src={logo2} alt="resivel logo 2" />
                  <span>{reservation.service.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">{reservation.service.price} Ft</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default ReservationsPage
