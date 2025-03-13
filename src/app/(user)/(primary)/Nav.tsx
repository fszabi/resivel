'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const currentPath = usePathname()

  return (
    <nav className="mb-16">
      <ul className="flex gap-6 text-sm font-medium text-zinc-950 dark:text-white">
        <li>
          <Link
            href="/"
            className={classNames({
              'hover:text-zinc-400': currentPath !== '/',
              'text-blue-700': currentPath === '/',
            })}
          >
            Szolgáltatások
          </Link>
        </li>
        {/* <li>
          <Link
            href="/szallasok"
            className={classNames({
              'hover:text-zinc-400': currentPath !== '/szallasok',
              'text-blue-700': currentPath === '/szallasok',
            })}
          >
            Szállások
          </Link>
        </li>
        <li>
          <Link
            href="/berbeadas"
            className={classNames({
              'hover:text-zinc-400': currentPath !== '/berbeadas',
              'text-blue-700': currentPath === '/berbeadas',
            })}
          >
            Bérbeadás
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Nav
