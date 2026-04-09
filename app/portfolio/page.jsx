import Link from 'next/link'

export const metadata = {
  title: 'Portfolio | Vision Digital',
  description: 'See our work — real projects with real results. Explore case studies from our digital marketing campaigns, web designs, and brand transformations.',
}

const projects = [
  {
    title: 'TechFlow E-Commerce',
    category: 'Paid Ads + SEO',
    description: 'Scaled an e-commerce platform from $50K to $200K monthly revenue through strategic Google Ads and comprehensive SEO optimization.',
    result: '+285% Revenue',
    gradient: 'from-[#6c5ce7] to-[#74b9ff]',
  },
  {
    title: 'FreshBite Restaurant Chain',
    category: 'Social Media',
    description: 'Built a massive social media following for a restaurant chain, resulting in fully booked weekends and a 3x increase in foot traffic.',
    result: '50K+ Followers',
    gradient: 'from-[#e17055] to-[#fdcb6e]',
  },
  {
    title: 'CloudSync SaaS',
    category: 'SEO + Content Marketing',
    description: 'Achieved #1 Google ranking for 15+ high-value keywords, driving 10,000+ organic visitors monthly to a B2B SaaS platform.',
    result: '#1 Google Ranking',
    gradient: 'from-[#00b894] to-[#55efc4]',
  },
  {
    title: 'StyleVault Fashion',
    category: 'Brand Identity + Social',
    description: 'Complete brand overhaul including new visual identity, social media strategy, and influencer partnerships that tripled brand awareness.',
    result: '3x Brand Awareness',
    gradient: 'from-[#a29bfe] to-[#fd79a8]',
  },
  {
    title: 'LaunchPad Tech',
    category: 'Full Funnel Marketing',
    description: 'Implemented a complete marketing funnel from awareness to conversion, generating over 200 qualified leads per month for a tech startup.',
    result: '200+ Leads/Month',
    gradient: 'from-[#0984e3] to-[#6c5ce7]',
  },
  {
    title: 'Prime Properties',
    category: 'Google Ads + Landing Pages',
    description: 'Created high-converting landing pages and Google Ads campaigns for a real estate firm, achieving a 5x return on ad spend.',
    result: '5x ROAS',
    gradient: 'from-[#fdcb6e] to-[#e17055]',
  },
  {
    title: 'FitZone Gym',
    category: 'Social Media + Ads',
    description: 'Launched a viral TikTok campaign and Meta Ads strategy that brought in 500+ new gym members in a single quarter.',
    result: '500+ New Members',
    gradient: 'from-[#6c5ce7] to-[#e17055]',
  },
  {
    title: 'GreenLeaf Organic',
    category: 'E-Commerce + SEO',
    description: 'Built and optimized a Shopify store for an organic food brand, growing monthly sales from $10K to $85K in 6 months.',
    result: '750% Sales Growth',
    gradient: 'from-[#00b894] to-[#6c5ce7]',
  },
  {
    title: 'NovaPay Fintech',
    category: 'Brand + Web Design',
    description: 'Designed a premium brand identity and website for a fintech startup, leading to a successful $2M seed funding round.',
    result: '$2M Funding Raised',
    gradient: 'from-[#74b9ff] to-[#a29bfe]',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-[#a29bfe] top-[-100px] right-[-200px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">Our Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Work That <span className="gradient-text">Speaks for Itself</span>
          </h1>
          <p className="text-[#8888a0] text-lg md:text-xl max-w-3xl leading-relaxed">
            Every project is a partnership. Here are some of the businesses we&apos;ve helped transform through strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio-grid" className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                id={`portfolio-item-${i}`}
                className="group glass rounded-2xl overflow-hidden card-hover"
              >
                {/* Gradient visual */}
                <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-500" />
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {project.result}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#a29bfe] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#8888a0] text-sm leading-relaxed">
                    {project.description}
                  </p>
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Want Results Like <span className="gradient-text">These?</span>
          </h2>
          <p className="text-[#8888a0] text-lg mb-10 max-w-2xl mx-auto">
            Your success story could be next. Let&apos;s discuss how we can create a custom strategy for your business.
          </p>
          <Link href="/contact" className="btn-primary text-lg" id="portfolio-cta">
            Start Your Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
