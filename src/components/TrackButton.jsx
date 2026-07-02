import { useContext } from "react";
import { TrackContext } from "../context/TrackContext";

export default function TrackButton({ id, title, category }) {
  const { activeTrack, setActiveTrack } = useContext(TrackContext);

  return (
    <button
      onClick={() => setActiveTrack(id)}
      className={`flex items-center justify-between w-full p-3 rounded text-left transition-all font-mono text-sm group shrink-0
                  ${activeTrack === id ? 'bg-[#6366F1]/10 border border-[#6366F1]/30 text-white shadow-inner'
          : 'hover:bg-neutral-900 border border-transparent text-neutral-400'}`}
    >
      <div className="flex items-center gap-4">
        <span className={`${activeTrack === id ? 'text-[#6366F1] font-bold' : 'text-neutral-600'}`}>{id}</span>
        <span className="font-bold">{title}</span>
      </div>
      <span className="text-[10px] text-neutral-500 hidden md:block">{category}</span>
    </button>
  );
}