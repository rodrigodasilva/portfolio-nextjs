import { Logo } from '@/components/logo'
import { IconExternalLink, IconMail, IconPhone } from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border space-y-6 flex justify-center p-4">
      <div className="mx-4 flex flex-col gap-6 w-full  max-w-screen-md">
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-start">
          <Logo className="text-primary-foreground" />
          <div className="flex flex-col gap-2">
            <Typography variant="detail" as="span">
              Entre em contato
            </Typography>
            <div className="flex flex-col gap-2">
              <Typography
                variant="body-medium"
                as="span"
                className="flex items-center gap-2"
              >
                <IconPhone className="w-5 h-5" />
                (77) 98122-1665
              </Typography>
              <Typography
                variant="body-medium"
                as="span"
                className="flex items-center gap-2 break-all"
              >
                <IconMail className="w-5 h-5" />
                comercial@jmcontabilize.com.br
              </Typography>
            </div>
          </div>
        </div>

        <Typography
          variant="body"
          as="span"
          className="flex items-start sm:items-center sm:justify-center sm:gap-1 flex-col sm:flex-row"
        >
          Desenvolvido por{' '}
          <Typography
            variant="body-bold"
            as="a"
            className="flex items-center gap-1"
            href="https://www.linkedin.com/in/rodrigo-ribeiro-programador/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rodrigo Ribeiro <IconExternalLink />
          </Typography>
        </Typography>
      </div>
    </footer>
  )
}
