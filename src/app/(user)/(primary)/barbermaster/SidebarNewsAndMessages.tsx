import { Avatar } from '@/components/ui/avatar'
import { Subheading } from '@/components/ui/heading'
import Image from 'next/image'
import barberMaster from '/public/assets/favouritestores/barber_master.webp'
import barberMasterMessage from '/public/assets/newsandmessages/barber_master_uzenet.webp'

const messages = [
  {
    id: 1,
    avatar: barberMaster,
    title: 'Barber Master',
    time: '1 napja',
    message: 'Szakáll formázás + hajvágás kombó akció a héten: 12.000 Ft.',
    image: barberMasterMessage,
  },
  {
    id: 2,
    avatar: barberMaster,
    title: 'Barber Master',
    time: '1 napja',
    message: 'Szakáll formázás + hajvágás kombó akció a héten: 12.000 Ft.',
    image: barberMasterMessage,
  },
  {
    id: 3,
    avatar: barberMaster,
    title: 'Barber Master',
    time: '1 napja',
    message: 'Szakáll formázás + hajvágás kombó akció a héten: 12.000 Ft.',
    image: barberMasterMessage,
  },
]

const SidebarNewsAndMessages = () => {
  return (
    <div className="space-y-4 xl:col-span-3">
      <Subheading>Hírek és üzenetek</Subheading>

      <div className="max-h-[35rem] space-y-4 overflow-y-scroll pr-5">
        {messages.map((message) => (
          <div key={message.id} className="space-y-4 rounded-lg bg-zinc-300/30 p-4 dark:bg-zinc-700/30">
            <div className="flex flex-wrap items-center gap-2 text-sm/6">
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

export default SidebarNewsAndMessages
