import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const EXPERIENCE = [
  {
    position: 'Desenvolvedor Fullstack',
    company: 'Live On Solutions',
    period: 'Out 2019 - Ago 2020',
    description:
      'Manutenção e implementação de novas funcionalidades utilizando Reactjs; alinhamento com a equipe e integração com API’s internas e externas'
  },
  {
    position: 'Desenvolvedor Fullstack',
    company: 'Code7',
    period: 'Set 2020 - Atual',
    description:
      'Manutenção, planejamento de melhorias e adição de funcionalidades de um sistema drag-on-drop para montagem de chatbots utilizando basicamente Reactjs e Nodejs'
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
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 border border-border px-6 py-4 rounded"
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

          <span className="text-muted-foreground text-sm">
            {item.description}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function MyResumeSection() {
  return (
    <section className="max-w-screen-md flex flex-col items-center gap-8 w-full px-4 sm:px-0">
      <h3 className="text-3xl font-normal text-center">Meu currículo</h3>

      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center gap-8"
      >
        <TabsList className="flex gap-2 w-max">
          <TabsTrigger value="experience">Experiência</TabsTrigger>
          <TabsTrigger value="education">Educação</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <ExperienceContent />
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <EducationContent />
        </TabsContent>
      </Tabs>
    </section>
  )
}
