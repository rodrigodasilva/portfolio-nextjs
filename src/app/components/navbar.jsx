'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { IconAlignJustify } from '@/components/ui/icons'

import { Typography } from '@/components/ui/typography'
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
        `fixed top-0 w-full h-16 flex justify-center bg-muted z-30`,
        { 'opacity-95 border-b border-b-border': scrolled }
      )}
    >
      <div className="mx-4 flex max-w-screen-md items-center justify-between w-full">
        <Logo />

        <div className="hidden sm:flex gap-4 items-center">
          <ul className="flex gap-4 items-center">
            {LINKS.map((item) => (
              <li key={item.value}>
                <Link href={item.value}>
                  <Typography variant="body-medium" as="span">
                    {item.label}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button
          size="icon"
          className="sm:hidden"
          variant="ghost-primary"
          aria-label="Abrir menu"
          radius="full"
        >
          <IconAlignJustify />
        </Button>
      </div>
    </header>
  )
}
