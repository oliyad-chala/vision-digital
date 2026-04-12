import Link from 'next/link'

export const metadata = {
  title: 'Portfolio | Vision Digital',
  description: 'See our work — real projects with real results. Explore case studies from our digital marketing campaigns, web designs, and brand transformations.',
}

const projects = [
  {
    title: 'Yummy Noodles',
    category: 'Content Creation & Page Growth',
    description: 'Produced high-quality reels emphasizing texture, steam, and serving moments. Implemented hashtag and caption strategies to improve discoverability. Maintained consistent posting schedule to build audience familiarity.',
    result: '529K Views',
    link: 'https://tiktok.com/search?q=Yummy+Noodles',
    gradient: 'from-[#e17055] to-[#fdcb6e]',
  },
  {
    title: 'Covenant Coffee',
    category: 'Brand Content & Product Promotion',
    description: 'Captured aesthetic coffee photography and reels showcasing preparation and serving. Created story content to promote daily offers and customer interactions.',
    result: '673K Views',
    link: 'https://tiktok.com/search?q=Covenant+Coffee',
    gradient: 'from-[#6c5ce7] to-[#74b9ff]',
  },
  {
    title: 'Selam Cakes',
    category: 'Brand Content & Product Promotion',
    description: 'Showcased sweet bakery items through short-form reels. Highlights on presentation and texture to engage the local audience.',
    result: '113K Views',
    link: 'https://tiktok.com/search?q=Selam+Cakes',
    gradient: 'from-[#a29bfe] to-[#fd79a8]',
  },
  {
    title: 'Arda Coffee',
    category: 'Digital Presence & Engagement',
    description: 'Promotional graphic designs created for Arda Coffee to enhance visual identity, communicate offers, and strengthen the brand’s digital presence.',
    result: '7,436 Profile Views',
    link: 'https://tiktok.com/search?q=Arda+Coffee',
    gradient: 'from-[#00b894] to-[#55efc4]',
  },
  {
    title: 'Dureti Burgers',
    category: 'Promotional Campaign Management',
    description: 'Trend-based content to maximize algorithm reach. Short-form reels highlighting food presentation and dining experience.',
    result: '2.6M Views',
    link: 'https://tiktok.com/search?q=Dureti+Burgers',
    gradient: 'from-[#0984e3] to-[#6c5ce7]',
  },
  {
    title: 'Simple Restaurant',
    category: 'Promotional Campaign Management',
    description: 'Promotional campaigns designed to attract new visitors, increase brand curiosity and maximize audience retention.',
    result: '211K Views',
    link: 'https://tiktok.com/search?q=Simple+Restaurant',
    gradient: 'from-[#fdcb6e] to-[#e17055]',
  },
  {
    title: 'Toran Ava',
    category: 'Content Strategy & Visual Branding',
    description: 'Consistent posting to maintain visibility. Managed audience engagement through comments and messages to build a loyal community.',
    result: '240K Video Views',
    link: 'https://tiktok.com/search?q=Toran+Ava',
    gradient: 'from-[#6c5ce7] to-[#e17055]',
  },
  {
    title: 'Aymen Juice',
    category: 'Full Social Media Management',
    description: 'Complete hands-on management including TikTok performance tracking, engaging content production, and trend adaptation.',
    result: '1,080 New Followers',
    link: 'https://tiktok.com/search?q=Aymen+Juice',
    gradient: 'from-[#00b894] to-[#6c5ce7]',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-[#a29bfe] top-[-100px] right-[-200px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="text-[#6c5ce7] font-semibold text-sm uppercase tracking-widest mb-4">Our Portfolio</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] md:leading-tight">
            Work That <span className="gradient-text">Speaks for Itself</span>
          </h1>
          <p className="text-[#8888a0] text-base md:text-xl max-w-3xl leading-relaxed px-1">
            Every project is a partnership. Here are some of the businesses we&apos;ve helped transform through strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio-grid" className="section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <a
                href={project.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                id={`portfolio-item-${i}`}
                className="group glass rounded-2xl overflow-hidden card-hover block cursor-pointer"
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative">
        <div className="glow-orb w-[600px] h-[600px] bg-[#6c5ce7] top-[-200px] left-[50%] -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] md:leading-tight">
            Want Results Like <span className="gradient-text">These?</span>
          </h2>
          <p className="text-[#8888a0] text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto px-2">
            Your success story could be next. Let&apos;s discuss how we can create a custom strategy for your business.
          </p>
          <Link href="/contact" className="btn-primary text-base md:text-lg w-full sm:w-auto justify-center" id="portfolio-cta">
            Start Your Project
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
