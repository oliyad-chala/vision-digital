export default function Testimonial({ name, feedback, role, avatar }) {
  return (
    <div className="glass rounded-2xl p-8 card-hover relative" id={`testimonial-${name?.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Quote mark */}
      <div className="absolute top-6 right-8 text-6xl text-[#6c5ce7]/10 font-serif leading-none">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#f9ca24]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Feedback */}
      <p className="text-[#c0c0d0] text-sm leading-relaxed mb-6">
        &ldquo;{feedback}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#a29bfe] flex items-center justify-center text-white font-bold text-sm">
          {avatar || name?.charAt(0)?.toUpperCase() || 'A'}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          {role && <p className="text-[#8888a0] text-xs">{role}</p>}
        </div>
      </div>
    </div>
  )
}
