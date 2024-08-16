const SKILLS = {
  REACT: 'ReactJS',
  REDUX: 'Redux',
  NODE: 'NodeJS',
  NEXT: 'Next.js',
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
  MONGODB: 'MongoDb',
  POSTGRES_SQL: 'PostgreSQL',
  SOCKET_IO: 'SocketIO',
  REACT_QUERY: 'React Query',
  ZUSTAND: 'Zustand'
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
      SKILLS.REACT_QUERY,
      SKILLS.ZUSTAND,
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

const PROJECTS = [
  {
    title: 'Logempenho',
    description: 'Sistema para controle de SD’s utilizadas no setor público',
    skills: [
      SKILLS.REACT,
      SKILLS.NODE,
      SKILLS.MONGODB,
      SKILLS.POSTGRES_SQL,
      SKILLS.SOCKET_IO,
      SKILLS.TAILWIND,
      SKILLS.SHADCN_UI,
      SKILLS.REACT_HOOK_FORM,
      SKILLS.REDUX
    ],
    gallery: [
      '/project_logempenho_1.png',
      '/project_logempenho_2.png',
      '/project_logempenho_3.png',
      '/project_logempenho_4.png'
    ],
    features: [
      'Gerenciamento da SD com permissionamento por tipo do usuário',
      'Geração de relatório com filtros customizados',
      'Chat em tempo real entre os usuários da plataforma',
      "Notificação em tempo real de novas SD's"
    ]
  },
  {
    title: 'NaTrave',
    description: 'Sistema para gerenciamento de bolões de futebol',
    skills: [
      SKILLS.REACT,
      SKILLS.NODE,
      SKILLS.MONGODB,
      SKILLS.POSTGRES_SQL,
      SKILLS.TAILWIND,
      SKILLS.REACT_QUERY,
      SKILLS.REACT_HOOK_FORM
    ],
    gallery: ['/project_na_trave_1.png'],
    features: []
  },
  {
    title: 'JM Contabilize',
    description:
      'Landing page e página de checkout com link de pagamento para um escritório de contabilidade',
    skills: [
      SKILLS.NEXT,
      SKILLS.SHADCN_UI,
      SKILLS.TAILWIND,
      SKILLS.REACT_HOOK_FORM
    ],
    gallery: [
      '/project_jm_contabilize_1.png',
      '/project_jm_contabilize_2.png',
      '/project_jm_contabilize_3.png',
      '/project_jm_contabilize_4.png',
      '/project_jm_contabilize_5.png',
      '/project_jm_contabilize_6.png'
    ],
    features: [
      'Landing page para captação de clientes configurada com Google Analytics',
      'Página de checkout com link de pagamento'
    ]
  }
]

export { SKILLS, EXPERIENCE, EDUCATION, PROJECTS }
