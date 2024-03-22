import { cn } from '@/utils/classnames'

import { IconGithub, IconLinkedin } from '../ui/icons'

const SOCIAL_LINKS = [
  {
    icon: IconGithub,
    name: 'Github',
    url: 'https://github.com/rodrigodasilva'
  },
  {
    icon: IconLinkedin,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/rodrigo-ribeiro-programador/'
  }
]

export function ButtonGroupSocialLinks({ className }) {
  return (
    <ul
      className={cn(
        'flex gap-1 items-center text-muted-foreground bg-muted w-max rounded-md px-0.5',
        className
      )}
    >
      {SOCIAL_LINKS.map(({ name, icon: Icon, url }) => (
        <li key={name} className="flex items-center justify-center">
          <a
            type="button"
            className="px-3 py-2 rounded-md hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
            <span className="sr-only">{name}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
