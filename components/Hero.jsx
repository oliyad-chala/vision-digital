import Link from 'next/link'

export default function Hero({ 
  title = "We Build Brands That",
  highlight = "Dominate Digital",
  subtitle = "Vision Digital transforms ambitious businesses into market leaders through data-driven strategies, stunning design, and relentless performance optimization.",
  ctaText = "Get Free Audit",
  ctaHref = "/contact",
  secondaryText = "View Our Work",
  secondaryHref = "/portfolio"
}) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="glow-orb w-[600px] h-[600px] bg-[#6c5ce7] top-[-200px] left-[-200px]" />
        <div className="glow-orb w-[400px] h-[400px] bg-[#a29bfe] bottom-[-100px] right-[-100px]" />
        <div className="glow-orb w-[300px] h-[300px] bg-[#74b9ff] top-[50%] left-[60%]" style={{ opacity: 0.08 }} />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 md:px-5 py-2 mb-6 md:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#6c5ce7] animate-pulse" />
          <span className="text-xs sm:text-sm text-[#8888a0]">Digital Marketing Agency</span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8">
          <span className="text-white">{title}</span>
          <br />
          <span className="gradient-text">{highlight}</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 text-base sm:text-lg md:text-xl text-[#8888a0] max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-2">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Link href={ctaHref} id="hero-cta-primary" className="btn-primary text-base sm:text-lg w-full sm:w-auto justify-center">
            {ctaText}
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link href={secondaryHref} id="hero-cta-secondary" className="btn-secondary text-base sm:text-lg w-full sm:w-auto justify-center">
            {secondaryText}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-600 absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#6c5ce7] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
