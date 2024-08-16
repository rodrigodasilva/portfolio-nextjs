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

import { PROJECTS } from '../data'

export function ProjectsSection() {
  return (
    <section
      className="max-w-screen-md flex flex-col items-center gap-8 w-full px-4 sm:px-0"
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
                <DrawerTrigger className="aspect-video rounded-md h-[230px]">
                  <Image
                    src={item.gallery?.[0]}
                    alt="Project"
                    width={600}
                    height={530}
                    className={cn(
                      'w-full h-full object-cover object-top rounded-md'
                    )}
                  />
                </DrawerTrigger>
                <div className="flex flex-col gap-1.5">
                  <span className="text-base font-medium">{item.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.description}
                  </span>
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

                    <Carousel
                      className="w-ful flex gap-2"
                      opts={{ align: 'start' }}
                    >
                      <CarouselPrevious className="my-auto w-12 min-w-12 h-12" />
                      <CarouselContent className>
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

                      <CarouselNext className="my-auto" />
                    </Carousel>

                    <ul className="flex gap-2 flex-wrap">
                      {item.skills?.map?.((skill, index) => (
                        <li key={index}>
                          <span className="bg-muted text-muted-foreground px-1.5 py-1 rounded-sm text-xs font-normal w-max flex">
                            #{skill}
                          </span>
                        </li>
                      ))}
                    </ul>
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
    </section>
  )
}
