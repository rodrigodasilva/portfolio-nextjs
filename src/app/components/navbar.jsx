'use client'

import Link from 'next/link'

import { useScrollPosition } from '@/utils/hooks/use-scroll-position'
import { cn } from '@/utils/classnames'
import { Logo } from '@/components/logo'

const LINKS = [
  { label: 'Home', value: '#home' },
  { label: 'Projetos', value: '#projetos' },
  { label: 'Contato', value: '#contato' }
]

export function NavBar() {
  const position = useScrollPosition(20)
  const scrolled = position > 1

  return (
    <header
      className={cn(
        `fixed top-0 lef-0 w-full px-6 h-12 flex justify-center items-center bg-background border-b border-b-transparent z-30`,
        { 'opacity-95 !border-b-border': scrolled }
      )}
    >
      <div className="flex gap-6 items-center justify-between w-full max-w-3xl">
        <Logo />
        <ul className="flex gap-6 items-center">
          {LINKS.map((item) => (
            <li key={item.value}>
              <Link href={item.value}>
                <span className="text-sm leading-6 font-regular text-muted-foreground">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
