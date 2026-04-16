import Image from 'next/image'

import { cn } from '@/utils/classnames'

import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { IconSearch } from '@/components/ui/icons'

import { AnimateEnter } from './animate-enter'

import { PROJECTS } from '../data'

export function ProjectsSection() {
  return (
    <AnimateEnter
      delay={0.4}
      className="max-w-screen-md flex w-full flex-col items-center gap-8 scroll-mt-20 px-4 sm:px-0"
      id="projetos"
    >
      <h3 className="text-3xl font-normal text-left w-full">
        Últimos projetos
      </h3>

      <Carousel
        className="w-ful flex flex-col gap-8 w-full"
        opts={{ align: 'start' }}
      >
        <CarouselContent>
          {PROJECTS.map((item, index) => (
            <CarouselItem key={index} className="max-w-xs flex flex-col gap-4">
              <Drawer>
                <DrawerTrigger className="group relative h-[230px] aspect-video overflow-hidden rounded-md">
                  <Image
                    src={item.gallery?.[0]}
                    alt="Project"
                    width={600}
                    height={530}
                    className={cn(
                      'h-full w-full rounded-md object-cover object-top transition-transform duration-300 group-hover:scale-105'
                    )}
                  />
                  <div
                    className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground md:hidden"
                    title="Toque para ver"
                  >
                    Toque para ver
                  </div>
                  <div
                    className="absolute inset-0 hidden items-center justify-center rounded-md bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex"
                    title="Ver detalhes"
                  >
                    <span className="pointer-events-none inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                      <IconSearch className="h-4 w-4" />
                      Ver projeto
                    </span>
                  </div>
                </DrawerTrigger>
                <div className="space-y-2">
                  <h4 className="text-base font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <DrawerContent>
                  <div className="flex flex-col gap-4 max-w-screen-md w-full mx-auto pt-8 pb-12 px-4">
                    <div className="flex flex-col gap-2 ">
                      <DrawerTitle>{item.title}</DrawerTitle>
                      <DrawerDescription>{item.description}</DrawerDescription>
                    </div>

                    <ul className="list-disc list-inside">
                      {item.features.map((task, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground"
                        >
                          {task}
                        </li>
                      ))}
                    </ul>

                    <ul className="flex gap-2 flex-wrap">
                      {item.skills?.map?.((skill, index) => (
                        <li key={index}>
                          <span className="bg-muted text-muted-foreground px-1.5 py-1 rounded-sm text-xs font-normal w-max flex">
                            #{skill}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Carousel
                      className="w-ful flex flex-col gap-8 w-full"
                      opts={{ align: 'start' }}
                    >
                      <CarouselContent>
                        {item.gallery.map((image, _index) => (
                          <CarouselItem
                            key={_index}
                            className="aspect-video rounded-md h-[320px] max-w-sm"
                          >
                            <Image
                              src={image}
                              alt="Project"
                              width={600}
                              height={530}
                              className={cn(
                                'w-full h-full object-contain object-top rounded-md'
                              )}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      <div className="w-full flex items-center justify-between">
                        <CarouselPrevious />
                        <CarouselDotButtons />
                        <CarouselNext />
                      </div>
                    </Carousel>
                  </div>
                </DrawerContent>
              </Drawer>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex items-center justify-between">
          <CarouselPrevious />
          <CarouselDotButtons />
          <CarouselNext />
        </div>
      </Carousel>
    </AnimateEnter>
  )
}
