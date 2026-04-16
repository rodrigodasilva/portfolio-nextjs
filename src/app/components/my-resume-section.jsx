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
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'

import { AnimateEnter } from './animate-enter'

import { EDUCATION, EXPERIENCE } from '../data'

function EducationContent() {
  return (
    <ul className="w-full sm:max-w-[80%] mx-auto space-y-4">
      {EDUCATION.map((item) => (
        <li
          key={item.period}
          className="w-full flex flex-col gap-2 rounded-2xl border border-border/80 bg-background/60 px-5 py-5 backdrop-blur-sm sm:px-6"
        >
          <h4 className="text-lg font-medium leading-none">{item.course}</h4>
          <span className="text-base text-muted-foreground">{item.local}</span>

          <span className="bg-primary/10 px-2 py-1 rounded-full text-xs font-normal text-primary w-max">
            {item.period}
          </span>
        </li>
      ))}
    </ul>
  )
}

function ExperienceContent() {
  return (
    <ul className="w-full sm:max-w-[80%] mx-auto">
      {EXPERIENCE?.map((item, index) => (
        <li key={item.period} className="relative pl-10 pb-6 last:pb-0">
          {index !== EXPERIENCE.length - 1 ? (
            <span className="absolute left-[11px] top-3 h-[calc(100%-0.25rem)] w-px bg-border sm:top-3 sm:h-[calc(100%-0.5rem)]" />
          ) : null}
          <span className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 bg-background shadow-[0_0_0_6px_rgba(10,16,32,0.9)] sm:top-0.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>

          <div className="grid gap-3 sm:grid-cols-[minmax(0,140px)_1fr] sm:gap-5">
            <span className="bg-primary/10 px-2.5 py-1 mt-0 sm:mt-0.5 rounded-full text-xs font-medium text-primary w-max h-max inline-flex">
              {item.period}
            </span>

            <div className="rounded-2xl border border-border/80 bg-background/60 px-5 py-5 backdrop-blur-sm sm:px-6 sm:py-6">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-medium leading-none">
                    {item.position}
                  </h4>
                  <span className="text-base text-muted-foreground">
                    {item.company}
                  </span>
                </div>

                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>

                <ul className="space-y-2">
                  {item.tasks.slice(0, 2).map((task, taskIndex) => (
                    <li
                      key={taskIndex}
                      className="relative pl-4 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-primary/70" />
                      {task}
                    </li>
                  ))}
                </ul>

                <Drawer>
                  <DrawerTrigger asChild>
                    <Button
                      variant="link"
                      className="text-muted-foreground mr-auto h-auto p-0 font-normal"
                    >
                      <IconList className="w-4" /> Ver detalhes
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="flex flex-col gap-4 max-w-screen-md w-full mx-auto pt-8 pb-12 px-4">
                      <div className="flex flex-col gap-2 ">
                        <DrawerTitle>{item.position}</DrawerTitle>
                        <DrawerDescription>{item.company}</DrawerDescription>

                        <span className="bg-primary/10 px-2 py-1 rounded-full text-xs font-normal text-primary w-max">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>

                      <ul className="space-y-2">
                        {item.tasks.map((task, index) => (
                          <li
                            key={index}
                            className="relative pl-4 text-sm leading-6 text-muted-foreground"
                          >
                            <span className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-primary/70" />
                            {task}
                          </li>
                        ))}
                      </ul>

                      <ul className="flex gap-2 flex-wrap pt-2">
                        {item.skills?.map?.((skill, index) => (
                          <li key={index}>
                            <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs font-normal w-max flex">
                              #{skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

const OPTIONS = { align: 'start' }

export function MyResumeSection() {
  return (
    <AnimateEnter
      delay={0.4}
      className="max-w-screen-md flex flex-col items-center gap-8 w-full px-4 sm:px-0"
    >
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
    </AnimateEnter>
  )
}
