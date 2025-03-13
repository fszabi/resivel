import { Heading, Subheading } from '@/components/catalyst-ui-kit/heading'
import { Input, InputGroup } from '@/components/catalyst-ui-kit/input'
import { getRecentReservations } from '@/data'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import FavouriteStores from './FavouriteStores'
import FeaturedStores from './FeaturedStores'
import Nav from './Nav'
import StoreNewsAndMessages from './StoreNewsAndMessages'

const HomePage = async () => {
  let reservations = await getRecentReservations()

  return (
    <>
      <Nav />
      <Heading>Üdvözlünk, István</Heading>
      <div className="mt-8 max-w-lg space-y-2">
        <Subheading>Keress az üzletek között</Subheading>
        <InputGroup>
          <MagnifyingGlassIcon />
          <Input name="search" placeholder="Keresés&hellip;" aria-label="Search" />
        </InputGroup>
      </div>

      <FeaturedStores />

      <FavouriteStores />

      <StoreNewsAndMessages />
    </>
  )
}

export default HomePage
