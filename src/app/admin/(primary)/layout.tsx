import { getServices } from '@/data'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import type React from 'react'
import { ApplicationLayout } from './application-layout'

export const metadata: Metadata = {
  // metadataBase: new URL('https://resivel.com/'),
  // keywords: [],
  title: {
    template: '%s - Resivel',
    default: 'Főoldal - Resivel',
  },
  description: 'Resivel - Foglalj, bérelj, szállj meg!',
  openGraph: {
    title: 'Resivel',
    description: 'Resivel - Foglalj, bérelj, szállj meg!',
  },
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  let services = await getServices()

  return (
    <html
      lang="hu"
      suppressHydrationWarning
      className="scroll-smooth text-zinc-950 antialiased dark:bg-zinc-900 dark:text-white lg:bg-zinc-100 dark:lg:bg-zinc-950"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <ApplicationLayout services={services}>{children}</ApplicationLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
