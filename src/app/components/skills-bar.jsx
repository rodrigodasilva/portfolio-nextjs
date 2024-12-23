import {
  IconAws,
  IconExpressJs,
  IconJavascript,
  IconMongo,
  // IconNextJs,
  IconPostgres,
  IconPrisma,
  IconReactJs,
  IconRedux,
  IconTailwind,
  IconTypescript,
  IconVite,
  IconReactflow
} from '@/components/ui/icons'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

import { AnimateEnter } from './animate-enter'

const skills = [
  {
    title: 'Javascript',
    icon: IconJavascript
  },
  {
    title: 'Typescript',
    icon: IconTypescript
  },
  {
    title: 'ReactJS',
    icon: IconReactJs
  },
  // {
  //   title: 'Nextjs',
  //   icon: IconNextJs
  // },
  {
    title: 'Tailwind',
    icon: IconTailwind
  },
  {
    title: 'Vite',
    icon: IconVite
  },
  {
    title: 'Reactflow',
    icon: IconReactflow
  },
  {
    title: 'Redux',
    icon: IconRedux
  },
  {
    title: 'AWS',
    icon: IconAws
  },
  {
    title: 'Expressjs',
    icon: IconExpressJs
  },
  {
    title: 'Prisma',
    icon: IconPrisma
  },
  {
    title: 'Postgres',
    icon: IconPostgres
  },
  {
    title: 'Mongodb',
    icon: IconMongo
  }
]

export function SkillsBar() {
  return (
    <AnimateEnter delay={0.4} className="w-full max-w-screen-md">
      <InfiniteMovingCards
        direction="right"
        speed="slow"
        className="w-full flex items-center mx-auto bg-muted"
      >
        {skills.map(({ title, icon: Icon }) => (
          <li
            className="w-max relative flex items-center text-muted-foreground"
            key={title}
            title={title}
          >
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <Icon className="w-5 h-5" />
          </li>
        ))}
      </InfiniteMovingCards>
    </AnimateEnter>
  )
}
