import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/utils/classnames'

function Banner({ className = '', ...props }) {
  return (
    <div
      className={cn(
        'relative w-full flex items-end justify-center bg-primary bg-[url("/person.png")] bg-no-repeat bg-auto bg-bottom',
        className
      )}
      {...props}
    />
  )
}

export function HomeSection() {
  return (
    <section className="flex flex-col sm:flex-row gap-4 w-full">
      <div className="flex w-full gap-6">
        <div className="flex flex-col gap-2" data-aos="fade-right">
          <h3 className="text-2xl font-bold">Rodrigo Ribeiro</h3>
          <Separator className="bg-primary max-w-[100px] w-full" />

          <div>
            <span className="text-xs text-muted-foreground">
              Social account
            </span>
          </div>
        </div>

        <Banner
          className="flex max-w-[160px] h-[240px] rounded-b-[20px] rounded-t-[80px]"
          data-aos="fade-left"
        />
      </div>

      <div>
        <h4 className="font-normal text-lg">Web Developer based in Brazil</h4>
        <p className="text-sm leading-6 font-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <Button>Lets talk</Button>
      </div>
    </section>
  )
}
