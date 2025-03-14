'use client'

import { Avatar } from '@/components/ui/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/ui/dropdown'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/ui/navbar'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/ui/sidebar'
import { SidebarLayout } from '@/components/ui/sidebar-layout'
import { Service } from '@/types'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronUpIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from '@heroicons/react/16/solid'
import {
  CalendarIcon,
  Cog6ToothIcon,
  HomeIcon,
  MoonIcon,
  Square2StackIcon,
  SunIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import istvan from '/public/assets/istvan.jpg'
import logo from '/public/assets/logo/logo.png'

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {resolvedTheme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-zinc-400 hover:text-white" />
      ) : (
        <MoonIcon className="h-5 w-5 text-zinc-500 hover:text-zinc-950" />
      )}
    </button>
  )
}

function AccountDropdownMenu({ anchor }: { anchor: 'top start' | 'bottom end' }) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      {/* <DropdownItem href="#">
        <UserCircleIcon />
        <DropdownLabel>Fiókom</DropdownLabel>
      </DropdownItem>
      <DropdownDivider /> */}
      <DropdownItem href="#">
        <ShieldCheckIcon />
        <DropdownLabel>Adatvédelmi tájékoztató</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="#">
        <LightBulbIcon />
        <DropdownLabel>ÁSZF</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <ArrowRightStartOnRectangleIcon />
        <DropdownLabel>Kijelentkezés</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  )
}

export function ApplicationLayout({ services, children }: { services: Service[]; children: React.ReactNode }) {
  let pathname = usePathname()

  let classes = clsx(
    // Base
    'flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5',
    // Leading icon/icon-only
    'data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5',
    // Trailing icon (down chevron or similar)
    'data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4',
    // Avatar
    'data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6',
    // Hover
    'data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950',
    // Active
    'data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950',
    // Current
    'data-[slot=icon]:*:data-[current]:fill-zinc-950',
    // Dark mode
    'dark:text-white dark:data-[slot=icon]:*:fill-zinc-400',
    'dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white',
    'dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white',
    'dark:data-[slot=icon]:*:data-[current]:fill-white'
  )

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <ThemeToggle />
              <DropdownButton as={NavbarItem}>
                <Avatar src={istvan} square />
              </DropdownButton>
              <AccountDropdownMenu anchor="bottom end" />
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center justify-between gap-2">
              <Image className="w-2/5" src={logo} alt="resivel logo" />
              <ThemeToggle />
            </div>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/admin" current={pathname === '/admin'}>
                <HomeIcon />
                <SidebarLabel>Főoldal</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/admin/naptar" current={pathname === '/admin/naptar'}>
                <CalendarIcon />
                <SidebarLabel>Naptár</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/admin/kategoriak" current={pathname.startsWith('/admin/kategoriak')}>
                <Square2StackIcon />
                <SidebarLabel>Kategóriák</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/admin/foglalasok" current={pathname.startsWith('/admin/foglalasok')}>
                <TicketIcon />
                <SidebarLabel>Foglalások</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/admin/beallitasok" current={pathname.startsWith('/admin/beallitasok')}>
                <Cog6ToothIcon />
                <SidebarLabel>Beállítások</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarSection>
              <SidebarHeading>Kategóriák</SidebarHeading>
              {services.map((service) => (
                <SidebarItem key={service.id} href={service.url}>
                  {service.name}
                </SidebarItem>
              ))}
            </SidebarSection>

            <SidebarSpacer />
          </SidebarBody>

          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar src={istvan} className="size-10" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">István</span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      istvan@gmail.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <AccountDropdownMenu anchor="top start" />
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  )
}
