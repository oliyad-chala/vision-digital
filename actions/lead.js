'use server'

import { supabase } from '@/lib/supabase'

export async function submitLead(formData) {
  const name = formData.get('name')
  const business_name = formData.get('business_name')
  const phone = formData.get('phone')
  const service = formData.get('service')

  const { error } = await supabase.from('leads').insert([
    { name, business_name, phone, service }
  ])

  if (error) {
    return { success: false, message: 'Something went wrong. Please try again.' }
  }

  return { success: true, message: 'Thank you! We\'ll contact you within 24 hours.' }
}
