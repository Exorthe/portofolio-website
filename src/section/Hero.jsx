import React, { useEffect, useRef, useState } from 'react';
import { Play, Disc, Disc3, Radio, Code2 } from 'lucide-react';
import WaveformBackground from '../components/WaveformBackground';

export default function Hero() {
  return (
    <section id="play" className="relative w-full h-screen">
      <WaveformBackground />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 lg:px-32">
        <div className="flex items-center gap-4 mb-6">
          <Code2 className="w-4 h-4 text-[#6366F1]" />
          <span className="font-mono text-[#6366F1] text-xs tracking-[0.2em] uppercase">
             01 // System Initialization
          </span>
          <div className="w-12 h-px bg-linear-to-r from-[#6366F1] to-transparent"></div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
          Halo, Saya<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-neutral-300 to-[#6366F1]">
            Nicholas Samosir.
          </span>
        </h1>

        {/* Biodata / Profil Block */}
        <div className="font-mono text-sm md:text-base max-w-xl mb-10 border-l-2 border-[#6366F1]/50 pl-5 space-y-6">
          <p className="text-neutral-300 font-sans leading-relaxed">
            Mahasiswa tingkat akhir Teknik Komputer dengan minat mendalam pada <strong className="text-white font-bold">Software Engineering</strong> dan <strong className="text-white font-bold">Embedded Systems</strong>. Saya menikmati proses menerjemahkan logika dari sirkuit digital tingkat rendah hingga arsitektur web modern.
          </p>

          {/* Kotak Info Spesifikasi */}
          <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-xs bg-neutral-900/40 p-5 rounded-sm border border-neutral-800 backdrop-blur-sm shadow-lg">
            <div>
              <span className="text-neutral-500 uppercase tracking-widest block mb-1 text-[10px]">Current Role</span>
              <span className="text-white font-bold">Upcoming Computer Eng. Fresh Graduate</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-widest block mb-1 text-[10px]">Base Location</span>
              <span className="text-neutral-300">Bekasi, Indonesia</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-widest block mb-1 text-[10px]">Availability</span>
              <span className="text-[#6366F1] flex items-center gap-2 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></span>
                Open to Work
              </span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-widest block mb-1 text-[10px]">Graduation</span>
              <span className="text-neutral-300">Expected Jul 2026</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <a href="#tracks" className="group flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-[#6366F1] hover:text-white transition-all">
            <Play className="w-4 h-4 fill-current" />
            <span>Listen</span>
          </a>

          <div className="flex items-center gap-2 text-neutral-500 font-mono text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            REC
          </div>
        </div>
      </div>

      <div className="absolute right-[-20%] top-[-10%] w-[80vh] h-[80vh] border border-neutral-900 rounded-full opacity-50 pointer-events-none"></div>
      <div className="absolute right-[-15%] top-[-5%] w-[70vh] h-[70vh] border border-neutral-900 rounded-full opacity-50 pointer-events-none"></div>
      <div className="absolute right-[-10%] top-[0%] w-[60vh] h-[60vh] border border-neutral-800 rounded-full opacity-50 pointer-events-none"></div>
    </section>
  )
}