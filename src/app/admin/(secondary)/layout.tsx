import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import type React from 'react'

export const metadata: Metadata = {
  // metadataBase: new URL('https://resivel.com/'),
  // keywords: [],
  title: {
    template: '%s - Resivel',
    default: 'Szolgáltatások - Resivel',
  },
  description: 'Resivel - Foglalj, bérelj, szállj meg!',
  openGraph: {
    title: 'Resivel',
    description: 'Resivel - Foglalj, bérelj, szállj meg!',
  },
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="hu" suppressHydrationWarning className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="flex h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
