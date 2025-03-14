import { Button } from '@/components/ui/button'
import { Checkbox, CheckboxField } from '@/components/ui/checkbox'
import { Divider } from '@/components/ui/divider'
import { Label } from '@/components/ui/fieldset'
import { Heading, Subheading } from '@/components/ui/heading'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { Textarea } from '@/components/ui/textarea'
import type { Metadata } from 'next'
import { Address } from './address'

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
          <Subheading>Cégnév</Subheading>
          <Text>Ez fog megjelenni a publikus profilodon.</Text>
        </div>
        <div>
          <Input aria-label="Cégnév" name="name" defaultValue="István Kft." />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Alkalmazottak</Subheading>
          <Text>Add hozzá az alkalmazottaidat és azok szerepkörét.</Text>
        </div>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Input aria-label="Alkalmazott neve" name="employee_name" placeholder="Név" />
            <Input aria-label="Alkalmazott email címe" name="employee_email" type="email" placeholder="Email" />
            <Input aria-label="Alkalmazott szerepköre" name="employee_role" placeholder="Szerepkör" />
            <Button type="button" plain>Hozzáadás</Button>
          </div>
          <Text>Még nincsenek hozzáadva alkalmazottak</Text>
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Cég bemutatkozása</Subheading>
          <Text>Ez fog megjelenni a publikus profilodon. Maximum 240 karakter.</Text>
        </div>
        <div>
          <Textarea aria-label="Organization Bio" name="bio" />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Céges email cím</Subheading>
          <Text>Ezen keresztül tudnak kapcsolatba lépni veled az ügyfelek.</Text>
        </div>
        <div className="space-y-4">
          <Input type="email" aria-label="Céges email cím" name="email" defaultValue="istvan@gmail.com" />
          <CheckboxField>
            <Checkbox name="email_is_public" defaultChecked />
            <Label>Email cím megjelenítése publikus profilon</Label>
          </CheckboxField>
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Cég címe</Subheading>
          <Text>Ahol a vállalkozásod be van jegyezve.</Text>
        </div>
        <Address />
      </section>

      <Divider className="my-10" soft />

      <div className="flex justify-end gap-4">
        <Button type="reset" plain>
          Visszaállítás
        </Button>
        <Button type="submit">Mentés</Button>
      </div>
    </form>
  )
}

export default SettingsPage
