import { Button } from '@/components/ui/button'
import { Heading, Subheading } from '@/components/ui/heading'
import { Link } from '@/components/ui/link'
import { Stat } from '@/components/ui/stat'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getService, getServiceReservations } from '@/data'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import barber from '/public/assets/barber.webp'

export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {
  let category = await getService(params.name)

  return {
    title: category?.name,
  }
}

const CategoryPage = async ({ params }: { params: { name: string } }) => {
  let category = await getService(params.name)
  let reservations = await getServiceReservations(params.name)

  const totalRevenue = reservations.reduce((sum, reservation) => sum + reservation.service.price, 0)

  return (
    <>
      <div className="max-lg:hidden">
        <Link href="/kategoriak" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Szolgáltatások
        </Link>
      </div>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <div className="w-32 shrink-0">
            <Image className="aspect-[3/2] rounded-lg shadow" src={barber} alt="" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Heading>{category.name}</Heading>
            </div>
            <div className="mt-2 text-sm/6 text-zinc-500">
              {category.price} Ft
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button outline>Szerkesztés</Button>
        </div>
      </div>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <Stat title="Teljes bevétel" value={totalRevenue.toString()} change="+2.5%" />
      </div>
      <Subheading className="mt-12">Korábbi foglalások</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Foglalási szám</TableHeader>
            <TableHeader>Foglalás dátuma</TableHeader>
            <TableHeader>Ügyfél</TableHeader>
            <TableHeader className="text-right">Összeg</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation.id} title={`Foglalás #${reservation.id}`}>
              <TableCell>{reservation.id}</TableCell>
              <TableCell className="text-zinc-500">{reservation.date}</TableCell>
              <TableCell>{reservation.clientName}</TableCell>
              <TableCell className="text-right">{reservation.service.price} Ft</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default CategoryPage
