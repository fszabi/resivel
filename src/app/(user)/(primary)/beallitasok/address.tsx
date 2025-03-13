'use client'

import { Input } from '@/components/catalyst-ui-kit/input'
import { Listbox, ListboxLabel, ListboxOption } from '@/components/catalyst-ui-kit/listbox'
import { getCountries } from '@/data'
import Image from 'next/image'
import { useState } from 'react'

export function Address() {
  let countries = getCountries()
  let [country, setCountry] = useState(countries[0])

  return (
    <div className="grid grid-cols-2 gap-6">
      <Input aria-label="Cím" name="cim" placeholder="Cím" defaultValue="Andrássy út 12." className="col-span-2" />
      <Input aria-label="Város" name="varos" placeholder="Város" defaultValue="Budapest" className="col-span-2" />
      <Listbox aria-label="Megye" name="megye" placeholder="Megye" defaultValue="Budapest">
        {country.regions.map((region) => (
          <ListboxOption key={region} value={region}>
            <ListboxLabel>{region}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
      <Input aria-label="Irányítószám" name="iranyitoszam" placeholder="Irányítószám" defaultValue="1061" />
      <Listbox
        aria-label="Ország"
        name="orszag"
        placeholder="Ország"
        by="code"
        value={country}
        onChange={(country) => setCountry(country)}
        className="col-span-2"
      >
        {countries.map((country) => (
          <ListboxOption key={country.code} value={country}>
            <Image className="w-5 sm:w-4" width={48} height={48} src={country.flagUrl} alt="" />
            <ListboxLabel>{country.name}</ListboxLabel>
          </ListboxOption>
        ))}
      </Listbox>
    </div>
  )
}
