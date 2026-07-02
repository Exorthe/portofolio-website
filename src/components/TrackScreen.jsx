import { ExternalLink, FolderGit2 } from "lucide-react";
import { TrackContext } from "../context/TrackContext";
import { useContext } from "react";

export default function TrackScreen({ id, title, category, description, tech, github, demo }) {
  const { activeTrack, setActiveTrack } = useContext(TrackContext);

  return (
    <div
      key={`display-${id}`}
      className={`transition-opacity duration-700 ease-in-out flex flex-col gap-6 ${activeTrack === id ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none hidden'}`}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"></span>
          <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Now Playing</span>
        </div>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tighter">
          {title}
          </h3>
        <span className="font-mono text-sm text-[#6366F1] border border-[#6366F1]/20 bg-[#6366F1]/10 px-3 py-1 rounded inline-block">
        {category}
        </span>
      </div>

      <p className="text-neutral-300 font-sans leading-relaxed md:text-lg max-w-3xl">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t, i) => (
          <span key={i} className="text-[11px] font-mono text-neutral-400 border border-neutral-800 bg-neutral-900 px-3 py-1.5 rounded-sm">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-6 mt-8 pt-8 border-t border-neutral-900">
        <a href={github} className="flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-[#6366F1] transition-colors uppercase tracking-widest">
          <FolderGit2 className="w-4 h-4" /> Source Code
        </a>
        <a href={demo} className="flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-[#6366F1] transition-colors uppercase tracking-widest">
          <ExternalLink className="w-4 h-4" /> Live Demo
        </a>
      </div>
    </div>
  );
}