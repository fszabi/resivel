import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/assets/logo/logo.png'

export const metadata: Metadata = {
  title: 'Bejelentkezés',
}

const LoginPage = () => {
  return (
    <SlimLayout>
      <div className="flex">
        <Image className="h-10 w-auto" src={logo} alt="resivel logo" />
      </div>
      <h2 className="mt-20 text-lg font-semibold text-zinc-900 dark:text-white">Bejelentkezés</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Még nincsen fiókja?{' '}
        <Link href="/regisztracio" className="font-medium text-blue-700 hover:underline">
          Regisztráljon be
        </Link>
      </p>
      <form className="mt-10 grid grid-cols-1 gap-y-8">
        <TextField label="Email cím" name="email" type="email" autoComplete="email" required />
        <TextField label="Jelszó" name="password" type="password" autoComplete="current-password" required />
        <div>
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Bejelentkezés <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}

export default LoginPage
