'use client'

import AutoHeight from 'embla-carousel-auto-height'

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { CarouselButton } from '@/components/ui/carousel/carousel'

const EXPERIENCE = [
  {
    position: 'Desenvolvedor Fullstack',
    company: 'Live On Solutions',
    period: 'Out 2019 - Ago 2020',
    descriptions: [
      'Manutenção e desenvolvimento de novas funcionalidades com foco no frontend em um sistema de pagamentos white-label, usando React, Redux, Styled Components;',
      'Implementação de páginas para realização de transferências, geração de relatórios, entre outras, realizando integração com API’s internas e externas;'
    ]
  },
  {
    position: 'Desenvolvedor Fullstack',
    company: 'Code7',
    period: 'Set 2020 - Atual',
    descriptions: [
      'Manutenção, planejamento de melhorias e adição de funcionalidades de um sistema drag-on-drop para criação de chatbots/uras utilizando React, Node e o ecossistema javascript;',
      'Implementação de melhorias no desempenho do criador de bots;',
      'Refatoração e desenvolvimento da aplicação com uma nova identidade visual;',
      'Desenvolvimento de funcionalidade para internacionalização usando a biblioteca i18n;',
      'Implementação de relatórios para controle de consumo das URA’s;',
      'Documentação de componentes usando storybook;'
    ]
  }
]

const EDUCATION = [
  {
    course: 'Bacharel em Eng. da Computação',
    local: 'Faculdade Independente do Nordeste',
    period: 'Jan 2012 - Dez 2017'
  }
]

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
          className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 border border-border px-6 py-4 rounded"
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
          </div>

          <ul className="list-disc marker:text-muted-foreground pl-4 sm:pl-0">
            {item.descriptions.map((description, index) => (
              <li key={index}>
                <span className="text-muted-foreground text-sm">
                  {description}
                </span>
              </li>
            ))}
          </ul>
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
