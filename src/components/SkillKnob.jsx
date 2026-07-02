export default function SkillKnob({ skill, gain }) {
  const rotation = -135 + ((gain / 12) * 270);
  const isMaxed = gain >= 11;

  let profLabel = "FAMILIAR";
  let profColor = "text-neutral-600";
  let ringColor = "#404040";

  if (gain >= 11) {
    profLabel = "EXPERT";
    profColor = "text-red-400 drop-shadow-[0_0_5px_rgba(248,113,113,0.6)]";
    ringColor = "#ef4444";
  }
  else if (gain >= 9) {
    profLabel = "ADVANCED";
    profColor = "text-[#6366F1] drop-shadow-[0_0_5px_rgba(99,102,241,0.6)]";
    ringColor = "#6366F1";
  }
  else if (gain >= 5) {
    profLabel = "PROFICIENT";
    profColor = "text-neutral-300";
    ringColor = "#6366F1";
  }

  const circumference = 289.02;
  const dashArrayValue = (gain / 12) * (270 / 360 * circumference);

  return (
    <div className="flex flex-col items-center group relative">
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full rotate-[-225deg] pointer-events-none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#222" strokeWidth="4" strokeDasharray="216.76 289.02" strokeLinecap="round" />
          <circle
            cx="50" cy="50" r="46" fill="none" stroke={ringColor} strokeWidth="4"
            strokeDasharray={`${dashArrayValue} 289.02`} strokeLinecap="round"
            className="transition-all duration-1000 drop-shadow-[0_0_3px_currentColor]"
          />
        </svg>

        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-neutral-700 to-neutral-900 border border-neutral-600 shadow-[0_5px_10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center relative z-10">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#1a1a1a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] border border-black flex items-center justify-center relative">
            <div className="absolute inset-0 transition-transform duration-1000 ease-out" style={{ transform: `rotate(${rotation}deg)` }}>
              <div className={`mx-auto w-0.75 h-3 rounded-full mt-1 ${isMaxed ? 'bg-red-500 shadow-[0_0_8px_#ef4444]' : 'bg-white shadow-[0_0_8px_#ffffff]'}`}></div>
            </div>
            <div className="w-3 h-3 rounded-full bg-linear-to-b from-neutral-600 to-neutral-800 border border-black"></div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center w-full">
        <span className="font-mono text-[11px] font-bold text-white text-center h-5 flex items-center leading-tight">
          {skill}
        </span>
        <span className={`font-mono text-[9px] font-black tracking-widest uppercase mt-1 ${profColor}`}>
          {profLabel}
        </span>
      </div>
    </div>
  );
}