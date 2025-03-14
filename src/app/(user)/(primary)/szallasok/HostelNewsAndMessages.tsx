import { Avatar } from '@/components/ui/avatar'
import { Subheading } from '@/components/ui/heading'
import Image from 'next/image'
import balaton from '/public/assets/favouritehostels/balaton.webp'
import budapest from '/public/assets/favouritehostels/budapest.webp'
import pecs from '/public/assets/favouritehostels/pecs.webp'
import balatonMessage from '/public/assets/newsandmessages/balaton_uzenet.webp'
import budapestMessage from '/public/assets/newsandmessages/budapest_uzenet.webp'
import pecsMessage from '/public/assets/newsandmessages/pecs_uzenet.webp'

const messages = [
  {
    id: 1,
    avatar: balaton,
    title: 'Balaton szállás',
    time: '2 órája',
    message: 'Új géllakk színek érkeztek! Tavaszi kollekciónk már elérhető.',
    image: balatonMessage,
  },
  {
    id: 2,
    avatar: budapest,
    title: 'Budapest szállás',
    time: '3 órája',
    message: 'Új szolgáltatás: aromaterápiás svédmasszázs 20% kedvezménnyel.',
    image: budapestMessage,
  },
  {
    id: 3,
    avatar: pecs,
    title: 'Pécs szállás',
    time: '1 napja',
    message: 'Szakáll formázás + hajvágás kombó akció a héten: 12.000 Ft.',
    image: pecsMessage,
  },
]

const StoreNewsAndMessages = () => {
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

export default StoreNewsAndMessages
