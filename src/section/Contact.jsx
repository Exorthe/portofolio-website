import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 bg-[#020202] border-t border-neutral-900 px-8 md:px-20 lg:px-32 flex flex-col justify-center min-h-[60vh]">
      <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">

        <div className="flex-1">

          {/* Header Format (No Box) */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse"></div>
            <span className="font-mono text-[#6366F1] text-xs tracking-[0.2em] uppercase">
              05 // End of Transmission
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's Connect.</h2>
          <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Terbuka untuk diskusi proyek rekayasa perangkat lunak, sistem embedded, atau sekadar bertukar referensi teknologi dan audio.
          </p>

          <a href="mailto:nikolaspakpahan67@gmail.com" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#6366F1] text-white font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all rounded-sm shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            <Mail className="w-4 h-4" />
            <span>Kirim Pesan</span>
          </a>
        </div>

        <div className="flex flex-col gap-8 font-mono text-sm mt-4 md:mt-0">
          <div>
            <div className="text-neutral-600 uppercase tracking-widest text-[10px] mb-3">Socials / Links</div>
            <div className="flex flex-col gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-300 hover:text-[#6366F1] transition-colors"><ArrowUpRight className="w-3 h-3" /> GitHub</a>
              <a href="https://linkedin.com/in/nicholassamosir/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-300 hover:text-[#6366F1] transition-colors"><ArrowUpRight className="w-3 h-3" /> LinkedIn</a>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-4xl mx-auto w-full mt-24 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
        <span>© 2026 NICHOLAS SAMOSIR.</span>
        <span>BUILT FOR RESONANCE.</span>
      </div>
    </section>
  )
}