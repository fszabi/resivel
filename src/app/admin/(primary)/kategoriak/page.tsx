import { Button } from '@/components/catalyst-ui-kit/button'
import { Divider } from '@/components/catalyst-ui-kit/divider'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/catalyst-ui-kit/dropdown'
import { Heading } from '@/components/catalyst-ui-kit/heading'
import { Input, InputGroup } from '@/components/catalyst-ui-kit/input'
import { Link } from '@/components/catalyst-ui-kit/link'
import { Select } from '@/components/catalyst-ui-kit/select'
import { getServices } from '@/data'
import { EllipsisVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import Image from 'next/image'
import barber from '/public/assets/barber.webp'

export const metadata: Metadata = {
  title: 'Kategóriák',
}

const CategoriesPage = async () => {
  let services = await getServices()

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>Kategóriák</Heading>
          <div className="mt-4 flex max-w-xl gap-4">
            <div className="flex-1">
              <InputGroup>
                <MagnifyingGlassIcon />
                <Input name="search" placeholder="Kategóriák keresése&hellip;" />
              </InputGroup>
            </div>
            <div>
              <Select name="sort_by">
                <option value="name">Név szerint</option>
                <option value="status">Ár szerint</option>
              </Select>
            </div>
          </div>
        </div>
        <Button>Kategória létrehozása</Button>
      </div>
      <ul className="mt-10">
        {services.map((service, index) => (
          <>
            <li key={service.id}>
              <Divider soft={index > 0} />
              <div className="flex items-center justify-between">
                <div key={service.id} className="flex gap-6 py-6">
                  <div className="w-32 shrink-0">
                    <Link href={service.url} aria-hidden="true">
                      <Image className="aspect-[3/2] rounded-lg shadow" src={barber} alt="" />
                    </Link>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-base/6 font-semibold text-zinc-950 dark:text-white">
                      <Link href={service.url}>{service.name}</Link>
                    </div>
                    <div className="text-xs/6 text-zinc-500">
                      {service.price} Ft
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Dropdown>
                    <DropdownButton plain aria-label="More options">
                      <EllipsisVerticalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom end">
                      <DropdownItem href={service.url}>View</DropdownItem>
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}

export default CategoriesPage
