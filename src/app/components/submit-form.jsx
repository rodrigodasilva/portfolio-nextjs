'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SubmitForm() {
  const router = useRouter()

  function handleSubmitForm(e) {
    e.preventDefault()

    const form = new FormData(e.target)
    const name = form.get('name')?.trim?.()
    const email = form.get('email')?.trim?.()
    const phone = form.get('phone')?.trim?.()

    const queryParams = new URLSearchParams({ name, email, phone, document })
    router.push(`/checkout/identity?${queryParams?.toString?.()}`)
  }

  return (
    <form
      className="flex flex-col gap-4 p-4 border border-border rounded-md"
      onSubmit={handleSubmitForm}
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Nome completo</Label>
        <Input id="name" name="name" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Telefone</Label>
        <Input id="phone" name="phone" required inputMode="tel" />
      </div>
      <Button
        variant="fill-primary"
        className="w-full sm:w-[200px] ml-auto mt-4"
      >
        Continuar
      </Button>
    </form>
  )
}
