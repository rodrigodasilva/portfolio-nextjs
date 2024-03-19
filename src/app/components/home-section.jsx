import { ButtonGroupSocialLinks } from '@/components/button-group-social-links'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/utils/classnames'

function Banner({ className = '', ...props }) {
  return (
    <div
      className={cn(
        'relative w-full flex items-end justify-center bg-primary/50 bg-[url("/person.png")] bg-no-repeat bg-cover bg-bottom',
        className
      )}
      {...props}
    />
  )
}

export function HomeSection() {
  return (
    <section className="max-w-screen-md flex gap-4 w-full px-4 sm:px-0">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 justify-between">
          <div
            className="flex flex-col justify-center gap-2"
            data-aos="fade-right"
          >
            <h3 className="text-4xl sm:text-5xl font-bold">Rodrigo Ribeiro</h3>
            <h4 className="text-xl sm:text-2xl font-normal">
              Desenvolvedor Web
            </h4>
          </div>
          <Banner
            className="flex sm:hidden max-w-[140px] h-[150px] sm:max-w-[260px] sm:h-[280px] rounded-b-[20px] rounded-t-[40px] sm:rounded-b-[40px] sm:rounded-t-[80px]"
            data-aos="fade-left"
          />
        </div>
        <Separator
          className="bg-border max-w-[100px] w-full"
          data-aos="fade-right"
        />

        <div className="flex flex-col gap-6" data-aos="fade-right">
          <p className="text-base leading-6 font-normal text-muted-foreground">
            Formado em Engenharia da Computação, atualmente trabalho como
            desenvolvedor utilizando ativamente NodeJS e ReactJS.
          </p>

          <ButtonGroupSocialLinks className="text-muted-foreground" />

          <Button className="w-max" radius="full">
            Entre em contato
          </Button>
        </div>
      </div>

      <Banner
        className="hidden sm:flex max-w-[260px] h-[280px] rounded-b-[40px] rounded-t-[80px]"
        data-aos="fade-left"
      />
    </section>
  )
}
