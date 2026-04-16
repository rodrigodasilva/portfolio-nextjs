'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { IconCircleArrowRight } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { submitContactForm } from '../actions'
import { Spinner } from '@/components/ui/spinner'

import { AnimateEnter } from './animate-enter'

export function ContactFormSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState(null)

  useEffect(() => {
    if (!feedback) return

    const timeoutId = window.setTimeout(() => {
      setFeedback(null)
    }, 3000)

    return () => window.clearTimeout(timeoutId)
  }, [feedback])

  async function handleSubmitForm(e) {
    e.preventDefault()
    setIsLoading(true)

    const formElement = e.target
    const form = new FormData(formElement)
    const name = form.get('name')?.trim?.()
    const email = form.get('email')?.trim?.()
    const message = form.get('message')?.trim?.()

    try {
      await submitContactForm({ name, email, message })
      formElement.reset()
      setFeedback({
        type: 'success',
        message: 'Mensagem enviada com sucesso!'
      })
    } catch (error) {
      setFeedback({
        type: 'error',
        message: 'Nao foi possivel enviar sua mensagem. Tente novamente.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimateEnter
      delay={0.4}
      className="max-w-screen-md flex flex-col items-center gap-8 w-full px-4 sm:px-0"
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
          <Label htmlFor="message">Mensagem</Label>
          <Input id="message" name="message" required />
        </div>

        <Button className="w-max pr-1" radius="full" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar mensagem'}
          {isLoading && <Spinner size="lg" />}
          {!isLoading && <IconCircleArrowRight className="w-8 h-8" />}
        </Button>
      </form>

      {feedback ? (
        <div
          className={`fixed bottom-4 right-4 z-50 rounded-lg border px-4 py-3 text-sm shadow-lg backdrop-blur ${
            feedback.type === 'success'
              ? 'border-accent/30 bg-accent text-accent-foreground'
              : 'border-destructive/40 bg-destructive text-destructive-foreground'
          }`}
          role="status"
          aria-live="polite"
        >
          {feedback.message}
        </div>
      ) : null}
    </AnimateEnter>
  )
}
