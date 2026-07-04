import { Play, Disc, FolderGit2,  Disc3, Radio, Code2 } from 'lucide-react';

export default function Sidebar(){
  return (
    <aside className="fixed left-0 top-0 w-20 md:w-28 h-screen bg-neutral-950 border-r border-neutral-800 z-50 flex flex-col justify-between items-center py-8">
      {/* Top Logo */}
      <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-[#6366F1]/10 flex items-center justify-center border border-[#6366F1]/30 group-hover:bg-[#6366F1]/20 transition-all">
          <Disc3 className="text-[#6366F1] w-5 h-5 animate-[spin_4s_linear_infinite]" />
        </div>
        <span className="font-mono text-[#6366F1] text-[9px] tracking-widest font-bold">NS</span>
      </div>

      {/* Middle Vertical Navigation */}
      <nav className="flex flex-col gap-20 items-center mt-12">
        <a href="#play" className="text-neutral-500 hover:text-white font-mono text-xs tracking-[0.3em] -rotate-90 transition-colors uppercase whitespace-nowrap">
          Profile
        </a>
        <a href="#experience" className="text-neutral-500 hover:text-[#6366F1] font-mono text-xs tracking-[0.3em] -rotate-90 transition-colors uppercase whitespace-nowrap">
          Log
        </a>
        <a href="#synth" className="text-neutral-500 hover:text-[#6366F1] font-mono text-xs tracking-[0.3em] -rotate-90 transition-colors uppercase whitespace-nowrap">
          Skills
        </a>
        <a href="#tracks" className="text-neutral-500 hover:text-[#6366F1] font-mono text-xs tracking-[0.3em] -rotate-90 transition-colors uppercase whitespace-nowrap">
          Tracks
        </a>
      </nav>

      {/* Bottom Socials */}
      <div className="flex flex-col gap-6 mt-12">
        <a href="https://github.com/Exorthe" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-[#6366F1] transition-colors">
          <FolderGit2 className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/nicholassamosir/" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-[#6366F1] transition-colors">
          <Radio className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
};