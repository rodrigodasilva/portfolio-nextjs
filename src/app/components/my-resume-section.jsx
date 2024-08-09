'use client'

import AutoHeight from 'embla-carousel-auto-height'

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { CarouselButton } from '@/components/ui/carousel/carousel'
import { Button } from '@/components/ui/button'
import { IconList } from '@/components/ui/icons'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

import { EDUCATION, EXPERIENCE } from '../data'

function EducationContent() {
  return (
    <ul className="w-full sm:max-w-[80%] mx-auto">
      {EDUCATION.map((item) => (
        <li
          key={item.period}
          className="w-full flex flex-col gap-2 border border-border px-6 py-4 rounded"
        >
          <h4 className="text-lg font-medium leading-none">{item.course}</h4>
          <span className="text-base text-muted-foreground">{item.local}</span>

          <span className="bg-primary/10 px-1.5 py-1 rounded-sm text-xs font-normal text-primary w-max">
            {item.period}
          </span>
        </li>
      ))}
    </ul>
  )
}

function ExperienceContent() {
  return (
    <ul className="space-y-4 w-full sm:max-w-[80%] mx-auto">
      {EXPERIENCE?.map((item) => (
        <li
          key={item.period}
          className="grid w-full grid-cols-1 gap-2 border border-border px-6 py-4 rounded"
        >
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-medium leading-none">
              {item.position}
            </h4>
            <span className="text-base text-muted-foreground">
              {item.company}
            </span>

            <span className="bg-primary/10 px-1.5 py-1 rounded-sm text-xs font-normal text-primary w-max">
              {item.period}
            </span>

            <span className="text-sm text-muted-foreground">
              {item.skills?.join?.(' · ')}
            </span>
          </div>

          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="link"
                className="text-muted-foreground mr-auto font-normal"
              >
                <IconList className="w-4" /> Ver detalhes
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex flex-col gap-4 max-w-screen-md w-full mx-auto pt-8 pb-12 px-4">
                <div className="flex flex-col gap-2 ">
                  <h4 className="text-lg font-medium leading-none">
                    {item.position}
                  </h4>
                  <span className="text-base text-muted-foreground">
                    {item.company}
                  </span>

                  <span className="bg-primary/10 px-1.5 py-1 rounded-sm text-xs font-normal text-primary w-max">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

                <ul className="list-disc list-inside">
                  {item.tasks.map((task, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {task}
                    </li>
                  ))}
                </ul>

                <span className="text-sm text-muted-foreground">
                  {'· '} {item.skills?.join?.(' · ')}
                </span>
              </div>
            </DrawerContent>
          </Drawer>
        </li>
      ))}
    </ul>
  )
}

const OPTIONS = { align: 'start' }

export function MyResumeSection() {
  return (
    <section className="max-w-screen-md flex flex-col items-center gap-8 w-full px-4 sm:px-0">
      <h3 className="text-3xl font-normal text-center">Meu currículo</h3>

      <Carousel
        className="w-ful flex flex-col gap-8"
        opts={OPTIONS}
        plugins={[AutoHeight()]}
      >
        <div className="w-full flex items-center justify-center gap-4">
          <CarouselButton scrollTo={0}>Experiência</CarouselButton>
          <CarouselButton scrollTo={1}>Educação</CarouselButton>
        </div>
        <CarouselContent>
          <CarouselItem className="flex flex-col gap-4">
            <ExperienceContent />
          </CarouselItem>

          <CarouselItem className="flex flex-col gap-4">
            <EducationContent />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}
