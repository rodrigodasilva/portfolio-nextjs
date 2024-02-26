import { Logo } from '@/components/logo'
import { IconExternalLink, IconMail, IconPhone } from '@/components/ui/icons'

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border space-y-6 flex justify-center p-4">
      <div className="mx-4 flex flex-col gap-6 w-full  max-w-screen-md">
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-start">
          <Logo className="text-primary-foreground" />
          <div className="flex flex-col gap-2">
            <span className={'text-xs font-medium'}>Entre em contato</span>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm leading-6 font-medium">
                <IconPhone className="w-5 h-5" />
                (77) 98122-1665
              </span>
              <span className="flex items-center gap-2 break-all text-sm leading-6 font-medium">
                <IconMail className="w-5 h-5" />
                comercial@jmcontabilize.com.br
              </span>
            </div>
          </div>
        </div>

        <span className="text-sm leading-6 font-regular flex items-start sm:items-center sm:justify-center sm:gap-1 flex-col sm:flex-row">
          Desenvolvido por{' '}
          <a
            className="text-sm leading-6 font-bold flex items-center gap-1"
            href="https://www.linkedin.com/in/rodrigo-ribeiro-programador/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rodrigo Ribeiro <IconExternalLink />
          </a>
        </span>
      </div>
    </footer>
  )
}
