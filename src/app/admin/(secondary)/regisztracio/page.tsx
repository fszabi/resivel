import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/assets/logo/logo.png'

export const metadata: Metadata = {
  title: 'Regisztráció',
}

const RegisterPage = () => {
  return (
    <SlimLayout>
      <div className="flex">
        <Image className="h-10 w-auto" src={logo} alt="resivel logo" />
      </div>
      <h2 className="mt-20 text-lg font-semibold text-zinc-900 dark:text-white">Regisztráció</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Már regisztrált?{' '}
        <Link href="/bejelentkezes" className="font-medium text-blue-700 hover:underline">
          Lépjen be
        </Link>{' '}
        a fiókjába.
      </p>
      <form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <TextField className="col-span-full" label="Cégnév" name="company_name" type="text" required />
        <TextField className="col-span-full" label="Email" name="email" type="email" autoComplete="email" required />
        <TextField className="col-span-full" label="Telefonszám" name="phone" type="tel" autoComplete="tel" required />
        <TextField
          className="col-span-full"
          label="Jelszó"
          name="password"
          type="password"
          autoComplete="new-password"
          required
        />
        <SelectField className="col-span-full" label="Hogyan talált rá a weboldalra?" name="referral_source">
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Twitter</option>
          <option>YouTube</option>
        </SelectField>
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Regisztráció <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}

export default RegisterPage
