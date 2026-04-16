'use server'

import { emailApi } from '@/api/email-api'

export async function submitContactForm({ name, email, subject, message }) {
  try {
    const resolvedSubject = subject?.trim?.() || `Novo contato de ${name}`

    console.info(
      'submitContactForm - data:',
      JSON.stringify({ name, email, subject: resolvedSubject, message })
    )

    const text = `From: ${email}\n\n ${message}`

    await emailApi.send({ name, subject: resolvedSubject, text })
    return { ok: true }
  } catch (err) {
    console.error('submitContactForm - error:', err)
    throw err
  }
}
