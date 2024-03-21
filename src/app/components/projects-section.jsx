import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const OPTIONS = { align: 'start' }

export function ProjectsSection() {
  return (
    <section
      className="max-w-screen-md flex flex-col items-center gap-8 w-full px-4 sm:px-0"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h3 className="text-3xl font-normal text-left w-full">
        Últimos projetos
      </h3>

      <Carousel className="w-ful flex flex-col gap-8 w-full" opts={OPTIONS}>
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="max-w-xs flex flex-col gap-4">
              <div className="flex aspect-video items-center justify-center p-6 bg-muted/50 rounded-md"></div>
              <div className="flex flex-col gap-1.5">
                <span className="text-base font-medium">Project name</span>
                <span className="text-sm text-muted-foreground">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                  excepturi quis velit, voluptatem magni beatae.
                </span>
              </div>
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
