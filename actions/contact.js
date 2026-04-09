'use server'

import { supabase } from '@/lib/supabase'

export async function submitContact(formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  const { error } = await supabase.from('contacts').insert([
    { name, email, message }
  ])

  if (error) {
    return { success: false, message: 'Something went wrong. Please try again.' }
  }

  return { success: true, message: 'Message sent successfully! We\'ll get back to you soon.' }
}
