import { Avatar } from '@/components/catalyst-ui-kit/avatar'
import { Button } from '@/components/catalyst-ui-kit/button'
import { Heading, Subheading } from '@/components/catalyst-ui-kit/heading'
import { StarIcon as StarIconSolid } from '@heroicons/react/20/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import Image from 'next/image'
import SidebarNewsAndMessages from './SidebarNewsAndMessages'
import barberMaster from '/public/assets/favouritestores/barber_master.webp'

export const metadata: Metadata = {
  title: 'Barber Master',
}

const CompanyPage = async () => {
  return (
    <>
      <div className="flex min-h-[30vh] items-end rounded-xl bg-black/30 bg-[url('/assets/newsandmessages/barber_master_uzenet.webp')] bg-cover bg-center bg-blend-overlay"></div>

      <div className="flex gap-4 max-lg:flex-col lg:items-center">
        <Avatar className="-mt-10 size-40 border-4 border-white dark:border-zinc-900 lg:ml-10" src={barberMaster} />
        <div>
          <Heading>Barber Master</Heading>
          <p className="flex items-center gap-1">
            <span className="text-zinc-950 dark:text-white">4.7</span>
            {[...Array(5)].map((_, index) =>
              index < Math.round(4.7) ? (
                <StarIconSolid key={index} className="size-5 text-yellow-400" />
              ) : (
                <StarIconOutline key={index} className="size-5 text-yellow-400" />
              )
            )}
            <p className="ml-2 leading-none text-zinc-500 dark:text-zinc-400">(84 értékelés)</p>
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-10">
        <div className="space-y-2 xl:col-span-7">
          <Subheading>Bemutatkozás</Subheading>
          <div className="max-w-4xl space-y-8">
            <p className="text-sm/6 text-zinc-950 dark:text-white">
              A Barber Master 2010-es megnyitása óta Budapest egyik vezető férfi fodrászatává és barbershopjává nőtte ki
              magát. Szakképzett barbereink folyamatosan képzik magukat a klasszikus és modern férfi hajvágási és
              szakállformázási technikák terén, hogy vendégeink mindig a legmagasabb színvonalú szolgáltatást kapják.
              Üzletünkben a klasszikus férfi hajvágástól kezdve a szakállformázáson és borotváláson át a modern fade
              technikákig minden megtalálható. Különös figyelmet fordítunk a személyes konzultációra, ahol barbereink
              részletesen megismerik vendégeink stílusát és elképzeléseit. A Barber Master nem csak egy fodrászat - egy
              hely, ahol a férfiak igazi gentleman élményben részesülnek. Prémium amerikai és angol hajápolási
              termékekkel dolgozunk, és szívesen adunk tanácsot az otthoni szakáll- és hajápolással kapcsolatban is.
            </p>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38"
                alt="István Kft. fodrászat - modern szalonbelső"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        <SidebarNewsAndMessages />
      </div>

      <div className="space-y-2">
        <Subheading className="mt-14">Foglalás</Subheading>
        <Button color="blue" href="/barbermaster/foglalas">
          Foglalás megkezdése
        </Button>
      </div>
    </>
  )
}

export default CompanyPage
