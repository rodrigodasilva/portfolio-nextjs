import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import { cn } from '@/utils/classnames'

function Banner({ className = '', ...props }) {
  return (
    <div
      className={cn(
        'relative w-full flex items-end justify-center bg-primary/10 bg-[url("/person.png")] bg-no-repeat bg-contain bg-center',
        className
      )}
      {...props}
    />
  )
}

export function HomeSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex w-full gap-6">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col gap-2" data-aos="fade-right">
            <Typography
              variant="h3"
              as="h3"
              // className="font-light text-primary"
            >
              Rodrigo Ribeiro
            </Typography>
            <Typography variant="large" as="h4" className="font-normal">
              Web Developer based in Brazil
            </Typography>
            <Typography variant="body" as="p" className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </Typography>
            <Button className="w-max">Lets Talk</Button>
          </div>
        </div>
        <Banner
          className="hidden sm:flex max-w-[320px] h-[360px] rounded-[80px]"
          data-aos="fade-left"
        />
      </div>
    </section>
  )
}
