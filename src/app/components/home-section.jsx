'use client'
import Link from 'next/link'
import Image from 'next/image'

import { ButtonGroupSocialLinks } from '@/components/button-group-social-links'
import { Button } from '@/components/ui/button'
import { IconCircleArrowRight } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'

import { AnimateEnter } from './animate-enter'

import { cn } from '@/utils/classnames'

function Banner({ className = '' }) {
  return (
    <Image
      src="/person.png"
      alt="Person"
      width={140}
      height={150}
      className={cn(
        'relative w-full flex items-end justify-center bg-primary/50  pt-4 object-cover',
        className
      )}
      priority
    />
  )
}

export function HomeSection() {
  return (
    <AnimateEnter className="max-w-screen-md flex gap-4 w-full px-4 md:px-0">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-4xl sm:text-5xl font-bold">Rodrigo Ribeiro</h3>
            <h4 className="max-w-lg text-xl font-normal sm:text-2xl">
              Fullstack Developer | Node.js • React • AWS
            </h4>
          </div>
          <Banner className="flex sm:hidden max-w-[140px] h-[150px] rounded-b-[20px] rounded-t-[40px]" />
        </div>
        <Separator className="bg-border max-w-[100px] w-full" />

        <div className="flex flex-col gap-6">
          <p className="max-w-xl text-base font-normal leading-6 text-muted-foreground">
            Desenvolvedor focado em performance, arquitetura escalavel e
            processamento de alto volume de dados.
          </p>

          <ButtonGroupSocialLinks className="text-muted-foreground" />

          <Button
            className="group w-max px-5 pr-2 shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
            radius="full"
            asChild
          >
            <Link href="#contato">
              Entre em contato
              <IconCircleArrowRight className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <Banner className="hidden sm:flex max-w-[240px] h-[270px] rounded-b-[40px] rounded-t-[80px]" />
    </AnimateEnter>
  )
}
