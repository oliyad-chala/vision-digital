import Link from 'next/link'

export const metadata = {
  title: 'About Us | Vision Digital',
  description: 'Learn about Vision Digital — our story, our mission, and why top brands trust us to grow their business online.',
}

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Results-Driven',
    description: 'Every strategy we build is designed to deliver measurable outcomes. Vanity metrics don\'t pay the bills — revenue does.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Creative Excellence',
    description: 'We blend data with creativity to produce campaigns that not only perform but also leave a lasting impression on your audience.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Transparent Partnership',
    description: 'No hidden fees, no black-box strategies. We keep you informed every step of the way with clear reporting and open communication.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Continuous Growth',
    description: 'Marketing isn\'t a one-time project — it\'s an ongoing engine. We continuously optimize, test, and scale what works.',
  },
]

const team = [
  { name: 'Alex Turner', role: 'Founder & CEO', initial: 'AT' },
  { name: 'Mia Patel', role: 'Head of Strategy', initial: 'MP' },
  { name: 'David Kim', role: 'Creative Director', initial: 'DK' },
  { name: 'Sara Okafor', role: 'Performance Lead', initial: 'SO' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-[#6c5ce7] top-[-100px] right-[-200px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            We&apos;re <span className="gradient-text">Vision Digital</span>
          </h1>
          <p className="text-[#8888a0] text-lg md:text-xl max-w-3xl leading-relaxed">
            A team of strategists, creatives, and performance marketers obsessed with one thing: helping ambitious businesses grow faster through digital marketing.
          </p>
        </div>
      </section>

      {/* Story */}
      <section id="our-story" className="section-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                From Startup to <span className="gradient-text">Industry Leader</span>
              </h2>
              <div className="space-y-4 text-[#8888a0] leading-relaxed">
                <p>
                  Vision Digital was founded with a simple belief: every business deserves access to world-class marketing. We started as a two-person team in a small office, driven by the conviction that data-driven creativity could transform businesses of any size.
                </p>
                <p>
                  Today, we&apos;re a full-service digital marketing agency serving over 150 clients across multiple industries. From e-commerce brands to SaaS platforms, restaurants to real estate — we&apos;ve helped businesses generate millions in revenue through strategic digital marketing.
                </p>
                <p>
                  What sets us apart isn&apos;t just our expertise — it&apos;s our relentless focus on results. We don&apos;t measure success in likes and impressions. We measure it in revenue, leads, and growth.
                </p>
              </div>
            </div>
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/10 to-transparent pointer-events-none" />
              <div className="relative grid grid-cols-2 gap-6">
                <div className="text-center p-6">
                  <div className="text-4xl font-black gradient-text mb-2">5+</div>
                  <div className="text-[#8888a0] text-sm">Years Experience</div>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-black gradient-text mb-2">150+</div>
                  <div className="text-[#8888a0] text-sm">Happy Clients</div>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-black gradient-text mb-2">500+</div>
                  <div className="text-[#8888a0] text-sm">Projects Done</div>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-black gradient-text mb-2">98%</div>
                  <div className="text-[#8888a0] text-sm">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="section-sm relative">
        <div className="glow-orb w-[400px] h-[400px] bg-[#a29bfe] bottom-[-200px] left-[-100px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">Our Mission</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Empowering Businesses to <span className="gradient-text">Thrive Online</span>
          </h2>
          <p className="text-[#8888a0] text-lg leading-relaxed max-w-3xl mx-auto">
            Our mission is to democratize digital marketing excellence. We believe that every business — regardless of size or budget — deserves a marketing partner that treats their growth as seriously as they do. We exist to bridge the gap between ambition and results.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">Why Vision Digital</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Makes Us <span className="gradient-text">Different</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div key={i} className="glass rounded-2xl p-8 card-hover group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6c5ce7]/20 to-[#a29bfe]/10 flex items-center justify-center text-[#a29bfe] mb-6 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">The Team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center card-hover group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6c5ce7] to-[#a29bfe] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  {member.initial}
                </div>
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <p className="text-[#8888a0] text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative">
        <div className="glow-orb w-[600px] h-[600px] bg-[#6c5ce7] top-[-200px] left-[50%] -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-[#8888a0] text-lg mb-10 max-w-2xl mx-auto">
            Ready to take your business to the next level? Let&apos;s talk about how we can help you dominate your market.
          </p>
          <Link href="/contact" className="btn-primary text-lg" id="about-cta">
            Start a Conversation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
