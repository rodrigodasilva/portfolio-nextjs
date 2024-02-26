import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { IconArrowLeft, IconMeh } from '@/components/ui/icons'

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 border p-4 rounded-md max-w-lg mx-auto mt-4">
        <IconMeh className="text-foreground" />
        <h2 className="text-center text-2xl font-bold">
          Página não encontrada
        </h2>
        <Button variant="soft-neutral" asChild>
          <Link href="/">
            <IconArrowLeft /> Voltar para a página inicial
          </Link>
        </Button>
      </div>
    </>
  )
}
