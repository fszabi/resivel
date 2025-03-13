import { Avatar } from '@/components/catalyst-ui-kit/avatar'
import { Subheading } from '@/components/catalyst-ui-kit/heading'
import Image from 'next/image'
import fordTransit from '/public/assets/favouriterentings/ford_transit.webp'
import hiltiFurokalapacs from '/public/assets/favouriterentings/hilti_furokalapacs.webp'
import volkswagenGolf from '/public/assets/favouriterentings/volkswagen_golf.webp'
import fordTransitMessage from '/public/assets/newsandmessages/ford_transit_uzenet.webp'
import hiltiFurokalapacsMessage from '/public/assets/newsandmessages/hilti_furokalapacs_uzenet.webp'
import volkswagenGolfMessage from '/public/assets/newsandmessages/volkswagen_golf_uzenet.webp'

const messages = [
  {
    id: 1,
    avatar: fordTransit,
    title: 'Ford Transit Teherautó',
    time: '2 órája',
    message:
      'Új Ford Transit érkezett a flottánkba! 2024-es modell, hosszú tengelytáv, magas tető. Ideális költözéshez, nagyobb szállításokhoz. Hétvégi foglalásokra 15% kedvezmény!',
    image: fordTransitMessage,
  },
  {
    id: 2,
    avatar: volkswagenGolf,
    title: 'Volkswagen Golf',
    time: '3 órája',
    message:
      'Volkswagen Golf 8-as modellek kedvező napi áron! Automata váltó, full extra felszereltség. Hosszabb távú bérlés esetén egyedi árak.',
    image: volkswagenGolfMessage,
  },
  {
    id: 3,
    avatar: hiltiFurokalapacs,
    title: 'Hilti Fúrókalapács',
    time: '1 napja',
    message:
      'Felújításhoz, építkezéshez profi Hilti szerszámok! Most minden Hilti gép bérlése mellé védőfelszerelést és tartozékokat adunk. SDS Plus és SDS Max típusok is elérhetők.',
    image: hiltiFurokalapacsMessage,
  },
]

const RentingNewsAndMessages = () => {
  return (
    <div className="mt-8 space-y-4">
      <Subheading>Hírek és üzenetek</Subheading>

      <div className="max-h-[25rem] space-y-4 overflow-y-scroll pr-5">
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

export default RentingNewsAndMessages
