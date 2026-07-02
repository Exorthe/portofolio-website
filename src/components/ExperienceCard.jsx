export default function ExperienceCard({ year, role, company, desc, tech, active }) {
  return (
    <div className="relative flex items-start gap-8 md:gap-12 group">
      <div className="relative z-10 shrink-0 w-8 h-8 md:w-20 md:h-20 flex items-center justify-center">
        <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center bg-[#050505] transition-all duration-500
                        ${active ? 'border-[#6366F1] shadow-[0_0_15px_rgba(99,102,241,0.5)]'
            : 'border-neutral-800 group-hover:border-neutral-500'}`}>
          <div className={`w-2 h-2 rounded-full ${active ? 'bg-[#6366F1] animate-pulse'
            : 'bg-neutral-700'}`}></div>
        </div>

        <div className={`hidden md:block absolute left-8 w-12 h-0.5 
                        ${active ? 'bg-[#6366F1]'
            : 'bg-neutral-800 group-hover:bg-neutral-600 transition-colors'}`}></div>
      </div>

      <div className={`flex-1 bg-[#0a0a0a] rounded-lg border p-6 md:p-8 transition-all duration-300
                      ${active ? 'border-[#6366F1]/30 shadow-[0_0_30px_rgba(99,102,241,0.05)]'
          : 'border-neutral-900 hover:border-neutral-700'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-white">{role}</h4>
            <span className="font-mono text-sm text-[#6366F1] uppercase tracking-widest">{company}</span>
          </div>
          <div className="font-mono text-xs text-neutral-500 bg-neutral-900 px-3 py-1 rounded-sm border border-neutral-800 self-start md:self-auto">
            {year}
          </div>
        </div>

        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className="font-mono text-[10px] text-neutral-300 bg-[#111] border border-neutral-800 px-2 py-1 rounded-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}