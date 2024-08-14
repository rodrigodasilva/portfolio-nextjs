const SKILLS = {
  REACT: 'ReactJS',
  REDUX: 'Redux',
  NODE: 'NodeJS',
  TYPESCRIPT: 'Typescript',
  TAILWIND: 'TailwindCSS',
  REACT_SELECT: 'React Select',
  STYLED_COMPONENTES: 'Styled Components',
  I18N: 'I18n',
  REACT_HOOK_FORM: 'React Hook Form',
  REACT_FLOW: 'React Flow',
  SHADCN_UI: 'Shadcn Ui',
  STORYBOOK: 'Storybook',
  EXPRESSJS: 'Express',
  MONGODB: 'MongoDb'
}

const EXPERIENCE = [
  {
    position: 'Desenvolvedor Fullstack',
    company: 'Live On Solutions',
    period: 'Out 2019 - Ago 2020',
    description:
      'Desenvolvimento com foco no frontend utilizando as tecnologias ReactJS e Redux, responsável pela implementação e manutenção de um sistema de banco white-label',
    tasks: [
      'Manutenção e desenvolvimento de novas funcionalidades com foco no frontend em um sistema de pagamentos white-label, usando ReactJS, Redux, Styled Components',
      'Implementação de páginas para realização de transferências, geração de relatórios, entre outras, realizando integração com API’s internas e externas'
    ],
    skills: [SKILLS.REACT, SKILLS.REDUX, SKILLS.STYLED_COMPONENTES]
  },
  {
    position: 'Desenvolvedor Fullstack',
    company: 'Code7',
    period: 'Set 2020 - Atual',
    description:
      'Manutenção, planejamento de melhorias e adição de funcionalidades de um sistema drag-on-drop para criação de chatbots/uras utilizando ReactJS, NodeJS e o ecossistema Javascript',
    tasks: [
      'Implementação de melhorias no desempenho do criador de bots',
      'Refatoração e desenvolvimento da aplicação com uma nova identidade visual',
      'Desenvolvimento de funcionalidade para internacionalização usando a biblioteca i18n',
      'Implementação de relatórios para controle de consumo',
      'Documentação de componentes usando storybook'
    ],
    skills: [
      SKILLS.REACT,
      SKILLS.NODE,
      SKILLS.MONGODB,
      SKILLS.TAILWIND,
      SKILLS.STYLED_COMPONENTES,
      SKILLS.SHADCN_UI,
      SKILLS.REACT_HOOK_FORM,
      SKILLS.REDUX,
      SKILLS.STORYBOOK,
      SKILLS.REACT_FLOW,
      SKILLS.REACT_SELECT
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

export { SKILLS, EXPERIENCE, EDUCATION }
