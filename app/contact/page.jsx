'use client'

import { useState } from 'react'
import { submitContact } from '@/actions/contact'

export default function ContactPage() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.target)
    const result = await submitContact(formData)

    setStatus(result)
    setLoading(false)

    if (result.success) {
      e.target.reset()
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-[#6c5ce7] top-[-100px] left-[-200px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] md:leading-tight">
            Let&apos;s Start Your <span className="gradient-text">Growth Journey</span>
          </h1>
          <p className="text-[#8888a0] text-base md:text-xl max-w-3xl leading-relaxed px-1">
            Ready to take your business to the next level? Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form-section" className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/5 to-transparent pointer-events-none" />

              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-[#8888a0] text-sm mb-8">Fill out the form below and we&apos;ll be in touch shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-[#555570] text-sm focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-[#555570] text-sm focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project and goals..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-[#555570] text-sm focus:outline-none focus:border-[#6c5ce7] focus:ring-1 focus:ring-[#6c5ce7] transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Status Message */}
                  {status && (
                    <div
                      id="form-status"
                      className={`p-4 rounded-xl text-sm font-medium ${status.success
                          ? 'bg-[#00b894]/10 text-[#55efc4] border border-[#00b894]/20'
                          : 'bg-[#e17055]/10 text-[#fab1a0] border border-[#e17055]/20'
                        }`}
                    >
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Info Cards */}
              <div className="glass rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#6c5ce7]/20 flex items-center justify-center text-[#a29bfe] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-[#8888a0] text-sm mb-2">We&apos;ll respond within 24 hours</p>
                    <a href="mailto:hello@visiondigital.com" className="text-[#a29bfe] text-sm font-medium hover:text-[#6c5ce7] transition-colors">
                      hello@visiondigital.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#6c5ce7]/20 flex items-center justify-center text-[#a29bfe] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-[#8888a0] text-sm mb-2">Mon–Fri, 9am–6pm</p>
                    <a href="tel:+1234567890" className="text-[#a29bfe] text-sm font-medium hover:text-[#6c5ce7] transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#25d366]/20 flex items-center justify-center text-[#25d366] flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">WhatsApp</h3>
                    <p className="text-[#8888a0] text-sm mb-2">Quick responses guaranteed</p>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-[#25d366] text-sm font-medium hover:text-[#128C7E] transition-colors">
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  {[
                    { label: 'Instagram', href: 'https://instagram.com/visiondigital', color: 'hover:bg-[#E1306C]/20 hover:text-[#E1306C]' },
                    { label: 'TikTok', href: 'https://tiktok.com/@visiondigital', color: 'hover:bg-white/10 hover:text-white' },
                    { label: 'Facebook', href: 'https://facebook.com/visiondigital', color: 'hover:bg-[#1877F2]/20 hover:text-[#1877F2]' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-5 py-2.5 rounded-xl bg-white/5 text-[#8888a0] text-sm font-medium transition-all duration-300 ${social.color}`}
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
