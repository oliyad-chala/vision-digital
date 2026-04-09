import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Testimonial from '@/components/Testimonial'

export const metadata = {
  title: 'Vision Digital | Premium Digital Marketing Agency',
  description: 'Transform your business with data-driven digital marketing. SEO, social media, web design, and paid ads that deliver real results.',
}

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'SEO Optimization',
    description: 'Dominate search results with our proven SEO strategies. We optimize every aspect of your online presence for maximum visibility.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Social Media Marketing',
    description: 'Build a powerful social presence that engages your audience. Content creation, community management, and growth strategies.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Brand Identity',
    description: 'Create a memorable brand that stands out. Logo design, visual identity, and brand guidelines that capture your essence.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Paid Advertising',
    description: 'Maximize ROI with targeted ad campaigns. Google Ads, Meta Ads, and TikTok Ads managed by certified professionals.',
  },
]

const stats = [
  { value: '150+', label: 'Clients Served' },
  { value: '$2.5M+', label: 'Revenue Generated' },
  { value: '320%', label: 'Avg. Growth Rate' },
  { value: '98%', label: 'Client Retention' },
]

const projects = [
  {
    title: 'E-Commerce Growth',
    category: 'Paid Ads + SEO',
    result: '+285% Revenue',
    gradient: 'from-[#6c5ce7] to-[#74b9ff]',
  },
  {
    title: 'Restaurant Chain',
    category: 'Social Media',
    result: '50K+ Followers',
    gradient: 'from-[#e17055] to-[#fdcb6e]',
  },
  {
    title: 'SaaS Platform',
    category: 'SEO + Content',
    result: '#1 Google Ranking',
    gradient: 'from-[#00b894] to-[#55efc4]',
  },
  {
    title: 'Fashion Brand',
    category: 'Brand Identity',
    result: '3x Brand Awareness',
    gradient: 'from-[#a29bfe] to-[#fd79a8]',
  },
  {
    title: 'Tech Startup',
    category: 'Full Funnel',
    result: '200+ Leads/Month',
    gradient: 'from-[#0984e3] to-[#6c5ce7]',
  },
  {
    title: 'Real Estate',
    category: 'Google Ads',
    result: '5x ROAS',
    gradient: 'from-[#fdcb6e] to-[#e17055]',
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechFlow Inc.',
    feedback: 'Vision Digital transformed our online presence completely. Our leads increased by 400% in just 3 months. The team is incredibly professional and results-driven.',
  },
  {
    name: 'James Rodriguez',
    role: 'Founder, FreshBite',
    feedback: 'The social media strategy they built for us was game-changing. We went from 2K to 50K followers and our restaurant is now fully booked every weekend.',
  },
  {
    name: 'Emily Chen',
    role: 'CMO, StyleVault',
    feedback: 'Best marketing agency we\'ve ever worked with. They don\'t just run campaigns — they build systems that generate consistent, predictable revenue growth.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Preview */}
      <section id="services-preview" className="section relative">
        <div className="glow-orb w-[400px] h-[400px] bg-[#6c5ce7] top-0 right-[-200px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Services That <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="text-[#8888a0] text-lg max-w-2xl mx-auto">
              We combine strategy, creativity, and technology to deliver marketing solutions that actually move the needle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Results Section */}
      <section id="results-section" className="section-sm relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-3xl p-8 md:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6c5ce7]/10 via-transparent to-[#a29bfe]/10 pointer-events-none" />

            <div className="relative text-center mb-12">
              <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">Proven Track Record</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Numbers That <span className="gradient-text">Speak</span>
              </h2>
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-4xl md:text-5xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-[#8888a0] text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio-preview" className="section relative">
        <div className="glow-orb w-[500px] h-[500px] bg-[#a29bfe] bottom-[-200px] left-[-200px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-[#8888a0] text-lg max-w-2xl mx-auto">
              Real results from real clients. Here&#39;s a glimpse of the impact we&#39;ve made.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group glass rounded-2xl overflow-hidden card-hover"
                id={`project-card-${i}`}
              >
                {/* Gradient placeholder image */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-[#6c5ce7] font-semibold text-sm">{project.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-secondary" id="view-all-projects">
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients <span className="gradient-text">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="section relative">
        <div className="glow-orb w-[600px] h-[600px] bg-[#6c5ce7] top-[-200px] left-[50%] -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to <span className="gradient-text">Scale Your Business?</span>
          </h2>
          <p className="text-[#8888a0] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Get a free marketing audit and discover exactly how we can grow your business. No strings attached.
          </p>
          <Link href="/contact" className="btn-primary text-base sm:text-lg w-full sm:w-auto justify-center" id="final-cta-button">
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
