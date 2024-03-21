'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ContactFormSection() {
  function handleSubmitForm(e) {
    e.preventDefault()

    const form = new FormData(e.target)
    const name = form.get('name')?.trim?.()
    const email = form.get('email')?.trim?.()
    const subject = form.get('subject')?.trim?.()

    const queryParams = new URLSearchParams({ name, email, subject, document })
    console.log(queryParams)
  }

  return (
    <section
      className="max-w-screen-md flex flex-col items-center gap-8 w-full px-4 sm:px-0"
      data-aos="fade-up"
      data-aos-delay="300"
      id="contato"
    >
      <div className="space-y-2">
        <h3 className="text-3xl font-normal text-center">Entre em contato</h3>
        <p className="text-base font-normal text-muted-foreground">
          Envie uma mensagem e vamos bater um papo
        </p>
      </div>

      <form
        className="flex flex-col gap-6 px-4 sm:px-6 py-8 border border-border rounded-md w-full sm:max-w-[80%]"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="subject">Assunto</Label>
          <Input id="subject" name="subject" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Mensagem</Label>
          <Input id="message" name="message" required />
        </div>
        <Button className="w-full sm:w-max mr-auto" radius="full">
          Enviar mensagem
        </Button>
      </form>
    </section>
  )
}
