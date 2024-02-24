import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { IconArrowLeft, IconMeh } from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 border p-4 rounded-md max-w-lg mx-auto mt-4">
        <IconMeh className="text-foreground" />
        <Typography variant="large" as="h2" className="text-center">
          Página não encontrada
        </Typography>
        <Button variant="soft-neutral" asChild>
          <Link href="/">
            <IconArrowLeft /> Voltar para a página inicial
          </Link>
        </Button>
      </div>
    </>
  )
}
