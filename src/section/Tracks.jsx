import { Play, Disc3, Radio, Code2, Activity, Cpu, Server, Microchip, LayoutTemplate, ListMusic, ExternalLink, FolderGit2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { TrackContext } from '../context/TrackContext';
import TrackButton from '../components/TrackButton';
import TrackScreen from '../components/TrackScreen';


export default function Tracks() {
  const [activeTrack, setActiveTrack] = useState('01');

  const tracks = [
    {
      id: '01',
      title: 'CaptureMe IoT',
      category: 'Embedded & IoT',
      description: 'Dirancang dan dibangun sebagai sistem monitoring ruangan berbasis IoT yang mengintegrasikan ESP32-CAM dan Blynk. Meliputi perakitan perangkat keras, pengujian, debugging komunikasi inter-node, serta memungkinkan pemantauan jarak jauh melalui dasbor mobile.',
      tech: ['ESP32', 'YOLO', 'Blynk', 'Python'],
      github: 'https://github.com/Exorthe/ProyekAkhir-IoT',
      demo: '#'
    },
    {
      id: '02',
      title: 'ProjectPals',
      category: 'Fullstack Web',
      description: 'Platform terpusat untuk kolaborasi antara freelancer dan klien. Memimpin tim dalam mendesain arsitektur sistem dan skema database (ter-normalisasi), membangun RESTful API backend, serta mengintegrasikannya dengan front-end React.',
      tech: ['Node.js', 'Express', 'React', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      id: '03',
      title: 'Basic Cyber Range',
      category: 'Network & Security',
      description: 'Konfigurasi dua lingkungan WordPress terisolasi (Apache, MySQL, PHP). Membangun infrastruktur DNS (Bind9), proxy HTTPS lokal (Squid), dan server email (Postfix/Dovecot). Melakukan penetration testing dan eksploitasi kerentanan XSS.',
      tech: ['Apache2', 'Bind9', 'Squid', 'Python', 'WPScan'],
      github: '#',
      demo: '#'
    },
    {
      id: '04',
      title: 'JBus Rental App',
      category: 'Mobile / Backend',
      description: 'Aplikasi mobile penyewaan bus dengan front-end Android native dan backend berbasis Spring Framework. Terlibat dalam mendesain wireframes UI/UX menggunakan Figma dan berkontribusi pada logika client-side maupun server-side.',
      tech: ['Android Studio', 'Java', 'Spring', 'Figma'],
      github: 'https://github.com/Exorthe/JBus-android',
      demo: '#'
    },
    {
      id: '05',
      title: 'Air Quality Monitor',
      category: 'Hardware / Low-Level',
      description: 'Pengembangan logika sistem pemantau udara sepenuhnya menggunakan bahasa tingkat rendah AVR Assembly. Disimulasikan dan di-debug menggunakan Proteus, serta menulis ulang pustaka display I2C dari C ke AVR Assembly.',
      tech: ['Arduino Uno', 'AVR Assembly', 'Proteus', 'C'],
      github: 'https://github.com/Exorthe/finpro-ssf2024-kelompok8',
      demo: '#'
    },
    {
      id: '06',
      title: 'Apache CloudStack Deploy',
      category: 'Cloud Infrastructure',
      description: 'Penyebaran private cloud skala kecil menggunakan Apache CloudStack dan KVM. Konfigurasi server manajemen, agent node, dan penyimpanan NFS. Menerapkan instance VM serta konfigurasi jaringan internal dan VPN.',
      tech: ['CloudStack', 'MySQL', 'NFS', 'KVM'],
      github: 'https://github.com/Exorthe/cloudstack-install',
      demo: '#'
    },
    {
      id: '07',
      title: 'Tourism Data Analysis',
      category: 'Machine Learning',
      description: 'Mengembangkan model klasifikasi (Naive Bayes, Random Forest, KNN, SVM) untuk menilai potensi pariwisata. Membangun, membersihkan dataset khusus, dan membandingkan akurasi model untuk menemukan pendekatan terbaik.',
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'Data Mining'],
      github: '#',
      demo: '#'
    },
    {
      id: '08',
      title: 'P2P OTA Firmware Distribution',
      category: 'Embedded & Distributed Systems',
      description: 'Skripsi: sistem distribusi update firmware over-the-air peer-to-peer untuk mesh network ESP32 menggunakan ESP-NOW. Arsitektur gateway-node dengan protokol biner kustom, mode seeding P2P bertingkat (sharded), staged reboot dengan ambang batas fail-rate otomatis, serta profiling CPU berbasis FreeRTOS untuk mengukur overhead proses OTA secara real-time.',
      tech: ['ESP32', 'ESP-NOW', 'FreeRTOS', 'MQTT', 'C++', 'PlatformIO'],
      github: 'https://github.com/Exorthe/P2P-OTA-ESP32-Gateway',
      demo: '#'
    },
    {
      id: '09',
      title: 'NutriGuard - MBG Nutrient Analysis',
      category: 'Fullstack & Computer Vision',
      description: 'Proyek akhir mata kuliah Desain Proyek Teknik Komputer: sistem monitoring nutrisi berbasis AI dan IoT untuk Program Makan Bergizi Gratis (MBG). Membangun backend Express.js (MVC, JWT, PostgreSQL), dashboard analitik vendor dengan React + Vite, serta klien Raspberry Pi berbasis OpenCV untuk auto-capture foto nampan. Seluruh layanan (AI, backend, frontend) di-containerize dengan Docker Compose. Model AI (YOLOv8) dilatih oleh anggota tim lain.',
      tech: ['Node.js', 'Express', 'React', 'PostgreSQL', 'FastAPI', 'YOLOv8', 'Docker', 'Raspberry Pi'],
      github: 'https://github.com/Exorthe/Despro_02',
      demo: '#'
    }
  ];

  return (
    <section id="tracks" className="relative w-full min-h-screen bg-neutral-950 flex flex-col justify-center px-4 md:px-12 lg:px-20 py-24 overflow-hidden border-t border-neutral-900">
      <div className="max-w-300 mx-auto w-full relative z-10 flex flex-col gap-10">

        {/* Header Format (No Box) */}
        <div className="flex items-center gap-4 mb-2">
          <ListMusic className="w-4 h-4 text-[#6366F1]" />
          <span className="font-mono text-[#6366F1] text-xs tracking-[0.2em] uppercase">
            04 // Record Crate
          </span>
          <div className="w-12 h-px bg-linear-to-r from-[#6366F1] to-transparent"></div>
        </div>

        <TrackContext.Provider value={{ activeTrack, setActiveTrack }}>

          {/* TOP ROW: Vinyl (Left) & Tracklist Selector (Right) */}
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">

            {/* Spinning Vinyl */}
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative">
              <div className="w-full h-full rounded-full bg-[#050505] border-8 border-[#111] shadow-[10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center animate-[spin_6s_linear_infinite]">
                <div className="absolute inset-[15%] rounded-full border border-neutral-800/80"></div>
                <div className="absolute inset-[30%] rounded-full border border-neutral-800/50"></div>
                <div className="w-[35%] h-[35%] rounded-full bg-[#6366F1] flex flex-col items-center justify-center border-2 border-[#050505] shadow-inner">
                  <span className="font-mono text-white/50 text-[8px] tracking-[0.2em] uppercase">Trk</span>
                  <span className="font-mono text-white font-black text-2xl">{activeTrack}</span>
                  <div className="w-3 h-3 rounded-full bg-neutral-950 mt-1 border border-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"></div>
                </div>
              </div>
            </div>

            {/* Tracklist Selector Container */}
            <div className="flex-1 w-full flex flex-col">
              <div className="font-mono text-[10px] text-neutral-500 uppercase mb-3 px-1 tracking-widest">Select Track:</div>

              {/* Scrollable Box */}
              <div className="w-full bg-[#0a0a0a] border border-neutral-900 rounded-lg p-3 flex flex-col gap-2 h-48 md:h-64 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#6366F1]">
                {tracks.map(track => (
                  <TrackButton
                    key={track.id}
                    id={track.id}
                    title={track.title}
                    category={track.category}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: Karaoke Monitor / Display Screen */}
          <div className="w-full bg-[#030303] border-2 border-neutral-800 rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-87.5 flex items-center">
            {/* CRT Scanline / Monitor effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[100%_4px] pointer-events-none"></div>
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none"></div>

            {/* Screen Content logic */}
            <div className="relative z-10 w-full">
              {tracks.map(track => (
                <TrackScreen
                  key={track.id}
                  id={track.id}
                  title={track.title}
                  category={track.category}
                  description={track.description}
                  tech={track.tech}
                  github={track.github}
                  demo={track.demo}
                />
              ))}
            </div>
          </div>
        </TrackContext.Provider>
      </div>
    </section>
  )
}