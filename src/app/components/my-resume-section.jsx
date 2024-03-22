import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function EducationContent() {
  return (
    <ul className="w-full sm:max-w-[80%] mx-auto">
      <li className="w-full flex flex-col gap-1.5 border border-border px-6 py-4 rounded">
        <h4 className="text-lg font-medium">Bacharel em Eng. da Computação</h4>
        <span className="text-base font-normal text-muted-foreground">
          Faculdade Independente do Nordeste
        </span>
        <span className="bg-primary/10 px-1.5 py-1 rounded-sm text-xs font-normal text-primary w-max">
          Jan 2012 - Dez 2017
        </span>
      </li>
    </ul>
  )
}

function ExperienceContent() {
  return (
    <ul className="space-y-4 w-full sm:max-w-[80%] mx-auto">
      <li className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 border border-border px-6 py-4 rounded">
        <div className="flex flex-col gap-1.5">
          <h4 className="text-lg font-medium">Desenvolvedor Fullstack</h4>
          <span className="text-base font-normal text-muted-foreground">
            Live On Solutions
          </span>
          <span className="bg-primary/10 px-1.5 py-1 rounded-sm text-xs font-normal text-primary w-max">
            Out 2019 - Ago 2020
          </span>
        </div>

        <span className="text-muted-foreground text-sm">
          Manutenção e implementação de novas funcionalidades utilizando
          Reactjs; alinhamento com a equipe e integração com API’s internas e
          externas
        </span>
      </li>

      <li className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 border border-border px-6 py-4 rounded">
        <div className="flex flex-col gap-1.5">
          <h4 className="text-lg font-medium">Desenvolvedor Fullstack</h4>
          <span className="text-base font-normal text-muted-foreground">
            Code7
          </span>
          <span className="bg-primary/10 px-1.5 py-1 rounded-sm text-xs font-normal text-primary w-max">
            Set 2020 - Atual
          </span>
        </div>

        <span className="text-muted-foreground text-sm">
          Manutenção, planejamento de melhorias e adição de funcionalidades de
          um sistema drag-on-drop para montagem de chatbots utilizando
          basicamente Reactjs e Nodejs
        </span>
      </li>
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
