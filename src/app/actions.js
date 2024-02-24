'use server'

export async function submitContactForm(data) {
  try {
    console.info('submitContactForm - data:', JSON.stringify(data))
    return { ok: true }
  } catch (err) {
    console.error('submitContactForm - error:', err)
    throw err
  }
}
