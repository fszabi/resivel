import { Avatar } from '@/components/catalyst-ui-kit/avatar'
import { Subheading } from '@/components/catalyst-ui-kit/heading'
import Image from 'next/image'
import barberMaster from '/public/assets/favouritestores/barber_master.webp'
import koromszalonPremium from '/public/assets/favouritestores/koromszalon_premium.webp'
import masszazsOazis from '/public/assets/favouritestores/masszazs_oazis.webp'
import barberMasterMessage from '/public/assets/newsandmessages/barber_master_uzenet.webp'
import koromszalonPremiumMessage from '/public/assets/newsandmessages/koromszalon_premium_uzenet.webp'
import masszazsOazisMessage from '/public/assets/newsandmessages/masszazs_oazis_uzenet.webp'

const messages = [
  {
    id: 1,
    avatar: koromszalonPremium,
    title: 'Körömszalon Premium',
    time: '2 órája',
    message: 'Új géllakk színek érkeztek! Tavaszi kollekciónk már elérhető.',
    image: koromszalonPremiumMessage,
  },
  {
    id: 2,
    avatar: masszazsOazis,
    title: 'Masszázs Oázis',
    time: '3 órája',
    message: 'Új szolgáltatás: aromaterápiás svédmasszázs 20% kedvezménnyel.',
    image: masszazsOazisMessage,
  },
  {
    id: 3,
    avatar: barberMaster,
    title: 'Barber Master',
    time: '1 napja',
    message: 'Szakáll formázás + hajvágás kombó akció a héten: 12.000 Ft.',
    image: barberMasterMessage,
  },
  {
    id: 4,
    avatar: koromszalonPremium,
    title: 'Körömszalon Premium',
    time: '2 órája',
    message: 'Új géllakk színek érkeztek! Tavaszi kollekciónk már elérhető.',
    image: koromszalonPremiumMessage,
  },
  {
    id: 5,
    avatar: masszazsOazis,
    title: 'Masszázs Oázis',
    time: '3 órája',
    message: 'Új szolgáltatás: aromaterápiás svédmasszázs 20% kedvezménnyel.',
    image: masszazsOazisMessage,
  },
  {
    id: 6,
    avatar: barberMaster,
    title: 'Barber Master',
    time: '1 napja',
    message: 'Szakáll formázás + hajvágás kombó akció a héten: 12.000 Ft.',
    image: barberMasterMessage,
  },
  {
    id: 7,
    avatar: koromszalonPremium,
    title: 'Körömszalon Premium',
    time: '2 órája',
    message: 'Új géllakk színek érkeztek! Tavaszi kollekciónk már elérhető.',
    image: koromszalonPremiumMessage,
  },
  {
    id: 8,
    avatar: masszazsOazis,
    title: 'Masszázs Oázis',
    time: '3 órája',
    message: 'Új szolgáltatás: aromaterápiás svédmasszázs 20% kedvezménnyel.',
    image: masszazsOazisMessage,
  },
  {
    id: 9,
    avatar: barberMaster,
    title: 'Barber Master',
    time: '1 napja',
    message: 'Szakáll formázás + hajvágás kombó akció a héten: 12.000 Ft.',
    image: barberMasterMessage,
  },
]

const StoreNewsAndMessages = () => {
  return (
    <div className="mt-8 space-y-4">
      <Subheading>Hírek és üzenetek</Subheading>

      <div className="max-h-[50rem] space-y-4 overflow-y-auto pr-5">
        {messages.map((message) => (
          <div key={message.id} className="space-y-4 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30">
            <div className="flex items-center gap-2 text-sm/6">
              <Avatar className="size-8" src={message.avatar} />
              <span className="font-medium text-zinc-950 dark:text-white">{message.title}</span>
              <span className="text-zinc-500">• {message.time}</span>
            </div>
            <p className="text-sm/6 text-zinc-950 dark:text-white">{message.message}</p>
            <Image className="w-full max-w-[30rem] rounded-lg" src={message.image} alt={message.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoreNewsAndMessages
