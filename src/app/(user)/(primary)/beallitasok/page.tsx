import { Button } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import { Heading, Subheading } from '@/components/ui/heading'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beállítások',
}

const SettingsPage = () => {
  return (
    <form method="post" className="mx-auto max-w-4xl">
      <Heading>Beállítások</Heading>
      <Divider className="my-10 mt-6" />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Név</Subheading>
          <Text>Ez a név fog megjelenni a foglalásaidban.</Text>
        </div>
        <div>
          <Input aria-label="Név" name="name" defaultValue="István" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Telefonszám</Subheading>
          <Text>Ezen keresztül tudsz értesítéseket kapni a foglalásaidról.</Text>
        </div>
        <div>
          <Input aria-label="Telefonszám" name="phone" defaultValue="06301234567" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Email cím</Subheading>
          <Text>Ezen keresztül tudsz értesítéseket kapni a foglalásaidról.</Text>
        </div>
        <div>
          <Input type="email" aria-label="Céges email cím" name="email" defaultValue="istvan@gmail.com" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <div className="flex justify-end gap-4">
        <Button type="reset" plain>
          Visszaállítás
        </Button>
        <Button type="submit" color="blue">
          Mentés
        </Button>
      </div>
    </form>
  )
}

export default SettingsPage
