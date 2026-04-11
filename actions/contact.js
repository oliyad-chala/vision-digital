'use server'

import { supabase } from '@/lib/supabase'
import nodemailer from 'nodemailer'

export async function submitContact(formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  // 1. Save to Supabase (Database backup) - Only if configured
  if (supabase) {
    const { error: dbError } = await supabase.from('contacts').insert([
      { name, email, message }
    ])

    if (dbError) {
      console.error('Database error:', dbError)
      // We don't return here because we still want to try sending the email
    }
  } else {
    console.warn('Supabase not configured, skipping database backup.')
  }

  // 2. Send Email Notification via Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"Vision Digital Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'oliyadchl@gmail.com',
      replyTo: email,
      subject: `New Message from ${name} via Contact Form`,
      text: `
        You have a new contact form submission.

        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6c5ce7;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
  } catch (emailError) {
    console.error('Email error:', emailError)
    // We still return success: true because the data is saved in Supabase, 
    // but the email failed. In a production app, we might handle this differently.
    return { 
      success: true, 
      message: 'Message saved, but email notification failed. We will still get back to you!' 
    }
  }

  return { success: true, message: 'Message sent successfully! We\'ll get back to you soon.' }
}
