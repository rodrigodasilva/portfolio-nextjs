import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function EducationContent() {
  return (
    <ul>
      <li className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 border border-border px-6 py-4 rounded">
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-medium">
            Bacharel em Eng. da Computação
          </h6>
          <span className="bg-primary/20 px-1.5 py-1 rounded-sm text-xs font-normal text-primary w-max">
            Jan 2012 - Dez 2017
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-medium">
            Faculdade Independente do Nordeste
          </h6>
          <span className="text-muted-foreground text-sm">
            Vitória da Conquista - Ba, Brasil
          </span>
        </div>
      </li>
    </ul>
  )
}

function ExperienceContent() {
  return (
    <ul className="space-y-4">
      <li className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 border border-border px-6 py-4 rounded">
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-medium">Live On Solutions</h6>
          <span className="bg-primary/20 px-1.5 py-1 rounded-sm text-xs font-normal text-primary w-max">
            Out 2019 - Ago 2020
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-medium">Desenvolvedor Fullstack</h6>
          <span className="text-muted-foreground text-sm">
            Manutenção e implementação de novas funcionalidades utilizando
            Reactjs; alinhamento com a equipe e integração com API’s internas e
            externas
          </span>
        </div>
      </li>
      <li className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 border border-border px-6 py-4 rounded">
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-medium">Code7</h6>
          <span className="bg-primary/20 px-1.5 py-1 rounded-sm text-xs font-normal text-primary w-max">
            Set 2020 - Atual
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-medium">Desenvolvedor Fullstack</h6>
          <span className="text-muted-foreground text-sm">
            Manutenção, planejamento de melhorias e adição de funcionalidades de
            um sistema drag-on-drop para montagem de chatbots utilizando
            basicamente Reactjs e Nodejs
          </span>
        </div>
      </li>
    </ul>
  )
}

export function MyResumeSection() {
  return (
    <section
      className="max-w-screen-md flex flex-col items-center gap-8 w-full px-4 sm:px-0"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h3 className="text-3xl font-normal text-center">Meu curriculo</h3>

      <Tabs
        defaultValue="education"
        className="w-full flex flex-col items-center gap-8"
      >
        <TabsList className="flex gap-2 w-max">
          <TabsTrigger value="education">Educação</TabsTrigger>
          <TabsTrigger value="experience">Experiência</TabsTrigger>
        </TabsList>
        <TabsContent value="education" className="w-full">
          <EducationContent />
        </TabsContent>
        <TabsContent value="experience" className="w-full">
          <ExperienceContent />
        </TabsContent>
      </Tabs>
    </section>
  )
}
