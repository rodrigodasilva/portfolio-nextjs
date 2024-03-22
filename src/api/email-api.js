import { resend } from '@/lib/resend'

export const emailApi = {
  send: async ({ name, subject, text }) => {
    await resend.emails.send({
      from: `${name} <hello@resend.dev>`,
      to: 'ribeiro.rodrigodasilva@gmail.com',
      subject,
      text
    })
  }
}
