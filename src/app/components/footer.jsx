import Link from 'next/link'

import { ButtonGroupSocialLinks } from '@/components/button-group-social-links'
import { IconWhatsapp, IconMail } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'

const LINKS = [
  { label: 'Home', value: '#home' },
  { label: 'Projetos', value: '#projetos' },
  { label: 'Contato', value: '#contato' }
]

export function Footer() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h3 className="text-3xl font-normal text-center px-4">
        Vamos trabalhar juntos?!
      </h3>

      <Separator />

      <footer className="w-full max-w-screen-md px-4 lg:px-0 pb-14 sm:pb-4">
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground font-normal uppercase mb-3">
                Links
              </span>
              <ButtonGroupSocialLinks />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground font-normal uppercase mb-3">
                Navegação
              </span>
              <ul className="flex flex-col gap-2">
                {LINKS.map((item) => (
                  <li key={item.value}>
                    <Link href={item.value}>
                      <span className="text-sm font-normal">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground font-normal uppercase mb-3">
                Contatos
              </span>
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2 text-sm font-normal">
                  <IconWhatsapp className="min-w-[16px] w-[16px] h-5" />
                  (77) 98122-1665
                </span>
                <span className="flex items-center gap-2 text-sm font-normal">
                  <IconMail className="min-w-[16px] w-[16px] h-5" />
                  ribeiro.rodrigodasilva@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
