import Link from 'next/link'

export const metadata = {
  title: 'Our Services | Vision Digital',
  description: 'Explore our full range of digital marketing services including SEO, social media marketing, paid advertising, web design, and brand identity.',
}

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'SEO Optimization',
    description: 'Climb to the top of Google and stay there. Our comprehensive SEO strategies cover everything from technical audits to content optimization.',
    benefits: [
      'Technical SEO audit & fixes',
      'Keyword research & strategy',
      'On-page & off-page optimization',
      'Local SEO for businesses',
      'Monthly performance reports',
      'Competitor analysis',
    ],
    gradient: 'from-[#6c5ce7] to-[#74b9ff]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Social Media Marketing',
    description: 'Build a loyal community and turn followers into customers. We manage your social presence across all major platforms with custom content strategies.',
    benefits: [
      'Content creation & curation',
      'Community management',
      'Instagram, TikTok, Facebook, LinkedIn',
      'Influencer partnerships',
      'Social media advertising',
      'Analytics & growth tracking',
    ],
    gradient: 'from-[#e17055] to-[#fdcb6e]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Paid Advertising',
    description: 'Get instant visibility and qualified leads with strategic paid campaigns across Google, Meta, and TikTok ad platforms.',
    benefits: [
      'Google Ads (Search & Display)',
      'Meta Ads (Facebook & Instagram)',
      'TikTok advertising',
      'Retargeting campaigns',
      'Landing page optimization',
      'ROAS tracking & optimization',
    ],
    gradient: 'from-[#00b894] to-[#55efc4]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: 'Web Design & Development',
    description: 'Beautiful, fast websites that convert visitors into customers. Mobile-first, SEO-optimized, and built for performance.',
    benefits: [
      'Custom website design',
      'Mobile-responsive development',
      'E-commerce solutions',
      'Landing page design',
      'Speed optimization',
      'CMS integration',
    ],
    gradient: 'from-[#a29bfe] to-[#fd79a8]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Brand Identity',
    description: 'Create a brand that people remember. From logo design to complete visual identity systems that capture your unique essence.',
    benefits: [
      'Logo design',
      'Visual identity system',
      'Brand guidelines',
      'Color palette & typography',
      'Marketing collateral',
      'Brand strategy',
    ],
    gradient: 'from-[#0984e3] to-[#6c5ce7]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    title: 'Content Marketing',
    description: 'Attract and engage your ideal audience with strategic content that educates, entertains, and converts across all channels.',
    benefits: [
      'Content strategy',
      'Blog writing & management',
      'Video content creation',
      'Email marketing',
      'Newsletter campaigns',
      'Content calendar planning',
    ],
    gradient: 'from-[#fdcb6e] to-[#e17055]',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-[#6c5ce7] top-[-100px] left-[-200px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] md:leading-tight">
            Everything You Need to <span className="gradient-text">Win Online</span>
          </h1>
          <p className="text-[#8888a0] text-base md:text-xl max-w-3xl leading-relaxed px-1">
            From strategy to execution, we provide end-to-end digital marketing services designed to drive real, measurable growth for your business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section id="services-list" className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={i}
                id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="glass rounded-3xl p-8 md:p-12 card-hover group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {/* Left - Info */}
                  <div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#a29bfe] transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-[#8888a0] text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right - Benefits */}
                  <div>
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">What&apos;s Included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-[#6c5ce7]/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-[#6c5ce7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#c0c0d0]">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative">
        <div className="glow-orb w-[600px] h-[600px] bg-[#6c5ce7] top-[-200px] left-[50%] -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] md:leading-tight">
            Not Sure Where to <span className="gradient-text">Start?</span>
          </h2>
          <p className="text-[#8888a0] text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto px-2">
            Get a free marketing audit and we&apos;ll show you exactly which services will have the biggest impact on your business.
          </p>
          <Link href="/contact" className="btn-primary text-base md:text-lg w-full sm:w-auto justify-center" id="services-cta">
            Get Your Free Audit
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
