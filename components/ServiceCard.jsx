import Link from 'next/link'

export default function ServiceCard({ icon, title, description }) {
  return (
    <Link href="/services" className="group glass rounded-2xl p-8 card-hover relative overflow-hidden block cursor-pointer" id={`service-card-${title?.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6c5ce7]/20 to-[#a29bfe]/10 flex items-center justify-center text-[#a29bfe] mb-6 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#a29bfe] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#8888a0] text-sm leading-relaxed">
          {description}
        </p>

        {/* Arrow */}
        <div className="mt-6 flex items-center gap-2 text-[#6c5ce7] text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
          Learn more
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
