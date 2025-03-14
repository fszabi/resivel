import { Heading, Subheading } from '@/components/ui/heading'
import { Select } from '@/components/ui/select'
import { Stat } from '@/components/ui/stat'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getRecentAdminReservations } from '@/data'
import Image from 'next/image'
import logo2 from '/public/assets/logo/logo2.png'

const HomePage = async () => {
  let adminReservations = await getRecentAdminReservations()

  return (
    <>
      <Heading>Üdvözlünk, István</Heading>
      <div className="mt-8 flex items-end justify-between">
        <Subheading>Áttekintés</Subheading>
        <div>
          <Select name="period">
            <option value="last_week">Előző hét</option>
            <option value="last_two">Előző két hét</option>
            <option value="last_month">Előző hónap</option>
            <option value="last_quarter">Előző negyedév</option>
          </Select>
        </div>
      </div>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Teljes bevétel" value="224 000 Ft" change="+4.5%" />
        <Stat title="Átlagos foglalási érték" value="5 500 Ft" change="-0.5%" />
        <Stat title="Foglalások száma" value="67" change="+4.5%" />
        <Stat title="Oldalmegtekintések" value="541" change="+21.2%" />
      </div>
      <Subheading className="mt-14">Legutóbbi foglalások</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Foglalási szám</TableHeader>
            <TableHeader>Foglalás dátuma</TableHeader>
            <TableHeader>Ügyfél</TableHeader>
            <TableHeader>Szolgáltatás</TableHeader>
            <TableHeader className="text-right">Összeg</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminReservations.map((reservation) => (
            <TableRow key={reservation.id} title={`Foglalás #${reservation.id}`}>
              <TableCell>{reservation.id}</TableCell>
              <TableCell className="text-zinc-500">{reservation.date}</TableCell>
              <TableCell>{reservation.clientName}</TableCell>
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

export default HomePage
