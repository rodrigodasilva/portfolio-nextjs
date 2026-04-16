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
    company: 'Ligo',
    period: 'Nov 2022 - Atual',
    description:
      'Atuo no desenvolvimento de uma plataforma SaaS para chatbots e URAs que atende mais de 10 mil usuários mensais, evoluindo a aplicação com foco em escala, performance e sustentabilidade técnica.',
    tasks: [
      'Desenvolvo o frontend em React e TypeScript e APIs em Node.js para sustentar uma plataforma com alto volume de uso.',
      'Refatorei partes relevantes do sistema legado com foco em Clean Architecture e modularização, reduzindo débito técnico e facilitando a manutenção.',
      'Otimizei fluxos críticos da aplicação, melhorando tempo de carregamento e a experiência de uso em pontos centrais do produto.',
      'Implementei internacionalização com foco em performance e padronizei componentes com Storybook, fortalecendo a consistência da interface e a escalabilidade do time.'
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
  },
  {
    position: 'Desenvolvedor Frontend',
    company: 'Evolux',
    period: 'Jul 2022 - Set 2022',
    description:
      'Contribuí para a entrega de interfaces web em um contexto de alta demanda, ajudando a manter o ritmo das entregas sem abrir mão de organização, consistência e qualidade no frontend.',
    tasks: [
      'Desenvolvi e mantive interfaces web modernas com foco em clareza, usabilidade e estabilidade.',
      'Realizei integrações com APIs REST, garantindo consistência na exibição e no consumo dos dados.',
      'Atuei em um ambiente de entregas rápidas, colaborando para manter prazos e qualidade técnica.',
      'Apliquei boas práticas de componentização para deixar a base de frontend mais organizada e reutilizável.'
    ],
    skills: [
      SKILLS.REACT,
      SKILLS.TYPESCRIPT,
      SKILLS.REACT_QUERY,
      SKILLS.STYLED_COMPONENTES
    ]
  },
  {
    position: 'Desenvolvedor Fullstack',
    company: 'Code7',
    period: 'Set 2020 - Jun 2022',
    description:
      'Participei da evolução de aplicações para criação de chatbots e URAs, desenvolvendo interfaces interativas e ajudando a tornar o frontend mais previsível, flexível e preparado para crescer.',
    tasks: [
      'Desenvolvi aplicações interativas com React, Redux e React Flow para suportar fluxos mais complexos de construção e automação.',
      'Implementei regras de negócio e integrações com serviços backend, conectando a experiência do usuário a processos críticos do produto.',
      'Atuei no gerenciamento de estado global e na organização da arquitetura do frontend para manter o comportamento da interface mais consistente.',
      'Contribuí ativamente para decisões arquiteturais, reforçando uma base mais orientada a componentes e mais simples de evoluir.'
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
  },
  {
    position: 'Desenvolvedor Fullstack',
    company: 'Live On Solutions Payment Solutions',
    period: 'Out 2019 - Set 2020',
    description:
      'Atuei no desenvolvimento de uma plataforma white-label de pagamentos, contribuindo para a estabilidade de um produto que processava milhares de transações por dia e exigia confiabilidade em cada etapa da jornada.',
    tasks: [
      'Desenvolvi e mantive funcionalidades para um sistema financeiro com foco em estabilidade, previsibilidade e boa experiência de uso.',
      'Criei dashboards e relatórios para apoiar a visualização de dados operacionais e financeiros.',
      'Integrei o produto a APIs de pagamento e serviços internos, ajudando a sustentar fluxos sensíveis do negócio.',
      'Trabalhei na evolução de aplicações críticas, sempre com atenção à confiabilidade e à consistência das operações.'
    ],
    skills: [SKILLS.REACT, SKILLS.REDUX, SKILLS.STYLED_COMPONENTES]
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
    description:
      'Produto orientado a fluxo operacional com controle de acessos, relatorios customizados e colaboracao entre usuarios.',
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
      "Notificação em tempo real na edição das SD's"
    ]
  },
  {
    title: 'NaTrave',
    description:
      'Produto com foco em experiencia do usuario, fluxo claro de participacao e gestao simples.',
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
      'Estrutura orientada a conversao, clareza na proposta comercial e jornada objetiva.',
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
