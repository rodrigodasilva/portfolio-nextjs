'use server'

import { emailApi } from '@/api/email-api'

export async function submitContactForm({ name, email, subject, message }) {
  try {
    console.info(
      'submitContactForm - data:',
      JSON.stringify({ name, email, subject, message })
    )

    const text = `From: ${email}\n\n ${message}`

    await emailApi.send({ name, subject, text })
    return { ok: true }
  } catch (err) {
    console.error('submitContactForm - error:', err)
    throw err
  }
}
