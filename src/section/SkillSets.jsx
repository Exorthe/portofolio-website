import { Play, Disc, Disc3, Radio, Code2, ListMusic, ChevronDown, FolderGit2, ExternalLink, Mail, ArrowUpRight } from 'lucide-react';
import EqPath from '../components/EqPath';
import SkillKnob from '../components/SkillKnob';

export default function SkillSets() {
  const skillList = [
    { skill: 'React.js', gain: 11 },
    { skill: 'Node & SQL', gain: 10 },
    { skill: 'Python', gain: 9 },
    { skill: 'C / C++', gain: 9 },
    { skill: 'ESP32 / IoT', gain: 9 },
    { skill: 'WordPress', gain: 11 },
    { skill: 'Java / Spring', gain: 8 },
    { skill: 'AVR Asm', gain: 8 },
    { skill: 'Tailwind CSS', gain: 8 },
    { skill: 'Docker / Cloud', gain: 7 },
    { skill: 'Cyber Security', gain: 6 },
    { skill: 'VHDL', gain: 4 }, // Familiar level based on CV
  ];

  return (
    <section id="synth" className="relative w-full min-h-screen bg-[#020202] flex items-center py-24 overflow-hidden border-t border-neutral-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-size-[40px_40px] opacity-20 pointer-events-none"></div>

      <div className="max-w-350 w-full mx-auto px-8 md:px-12 lg:px-20 flex flex-col xl:flex-row gap-12 xl:gap-16 relative z-10">

        <div className="w-full xl:w-[35%] flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <Radio className="w-4 h-4 text-[#6366F1]" />
            <span className="font-mono text-[#6366F1] text-xs tracking-[0.2em] uppercase">
              03 // Synthesis Module
            </span>
            <div className="w-12 h-px bg-linear-to-r from-[#6366F1] to-transparent"></div>
          </div>

          <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter leading-tight">
            Parametric <br />
            <span className="text-neutral-500">Skill Spectrum.</span>
          </h3>

          <div className="space-y-6 text-neutral-400 font-sans leading-relaxed text-sm md:text-base max-w-xl">
            <p>
              Sebagai mahasiswa Teknik Komputer, spektrum keahlian saya cukup luas. Mulai dari bahasa tingkat rendah (C, AVR, ESP32) untuk kontrol perangkat keras, arsitektur backend, hingga pengembangan antarmuka web modern. Panel EQ di samping memetakan distribusi kemahiran teknis saya saat ini.
            </p>
          </div>
        </div>

        <div className="w-full xl:w-[65%] flex flex-col">
          <div className="bg-[#151515] rounded-xl border-2 border-neutral-800 shadow-2xl overflow-hidden flex flex-col relative">

            <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-neutral-900 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] border border-neutral-700"></div>
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-neutral-900 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] border border-neutral-700"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#0a0a0a] px-8 py-4 border-b border-neutral-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                <span className="font-mono text-[10px] md:text-xs text-neutral-300 uppercase tracking-widest font-bold">System PEQ Profile</span>
              </div>

              <div className="flex items-center gap-4 bg-[#111] px-4 py-1.5 rounded-sm border border-neutral-800 shadow-inner">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[8px] text-neutral-500 uppercase">Preamp 1:</span>
                  <span className="font-mono text-[10px] text-red-400 font-bold">-11.3 dB</span>
                </div>
                <div className="w-px h-3 bg-neutral-800"></div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[8px] text-neutral-500 uppercase">Preamp 2:</span>
                  <span className="font-mono text-[10px] text-[#6366F1] font-bold">+1.0 dB</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-55 bg-[#222] border-b border-neutral-800 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex justify-between px-1 opacity-[0.05] pointer-events-none">
                {[2, 3, 4, 5, 6, 7, 8, 9, 20, 30, 40, 50, 60, 70, 80, 90].map((pos, i) => (
                  <div key={i} className="h-full w-px bg-white" style={{ position: 'absolute', left: `${pos}%` }}></div>
                ))}
              </div>

              <div className="absolute inset-0 flex flex-col justify-between py-2 opacity-10 pointer-events-none">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-white"></div>
                ))}
              </div>

              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                <line x1="0" y1="50" x2="1000" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

                <EqPath />
              </svg>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-10 p-8 bg-[#111] pb-12">
              {skillList.map((item, idx) => {
                return (
                  <SkillKnob
                    key={idx}
                    skill={item.skill}
                    gain={item.gain} />
                )
              })}
            </div>

            <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-neutral-900 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] border border-neutral-700"></div>
            <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-neutral-900 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] border border-neutral-700"></div>
          </div>
        </div>

      </div>
    </section>
  )
}