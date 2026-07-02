import ExperienceCard from "../components/ExperienceCard";
import { Code2 } from "lucide-react";

export default function Experiences() {
  const experiences = [
    {
      year: 'OCT 2025 — MAY 2026',
      role: 'Web Developer Intern',
      company: 'Fakultas Kedokteran Gigi UI',
      desc: 'Mendesain ulang UI/UX website resmi fakultas dan melakukan migrasi serta restrukturisasi untuk lebih dari 110 profil dosen menggunakan WordPress dan Elementor.',
      tech: ['WordPress', 'Elementor', 'UI/UX'],
      active: false
    },
    {
      year: 'AUG 2024 — JUN 2026',
      role: 'Laboratory Assistant',
      company: 'Digital Laboratory Univ. Indonesia',
      desc: 'Memberikan dukungan teknis, merancang modul pembelajaran, dan mengajar pemrograman C, VHDL, AVR Assembly, serta desain sirkuit digital kepada mahasiswa.',
      tech: ['C', 'VHDL', 'AVR Assembly', 'Digital Circuits'],
      active: false
    },
    {
      year: 'JUN 2025 — AUG 2025',
      role: 'Frontend Developer',
      company: 'Ikoner Litama Sinergi',
      desc: 'Mengonversi desain UI/UX Figma menjadi komponen front-end yang responsif dan dapat digunakan kembali pada halaman kunci perusahaan.',
      tech: ['Vue.js', 'Tailwind CSS', 'Figma'],
      active: false
    },
    {
      year: 'SEP 2024 — FEB 2025',
      role: 'WordPress Website Developer',
      company: 'URALA International Indonesia',
      desc: 'Memimpin tim beranggotakan 5 orang. Menerjemahkan konsep desain visual ke dalam halaman web responsif serta membuat templat komponen yang dapat digunakan ulang.',
      tech: ['WordPress', 'Team Leadership', 'Web Design'],
      active: false
    },
    {
      year: 'APR 2024 — JUL 2024',
      role: 'Automation Developer',
      company: 'PT. Karya Anugrah Teknologi',
      desc: 'Merancang database terdistribusi menggunakan 7 Google Sheets dan mengembangkan skrip otomasi untuk memastikan sinkronisasi data dua arah secara real-time.',
      tech: ['Google Apps Script', 'Data Automation', 'Database Logic'],
      active: false
    },
    {
      year: 'OCT 2023 — DEC 2023',
      role: 'WordPress Website Developer',
      company: 'PT. Karya Anugrah Teknologi',
      desc: 'Membangun dan meluncurkan website secara penuh menggunakan Elementor, memastikan responsivitas pada perangkat mobile dan akurasi desain.',
      tech: ['WordPress', 'Elementor', 'Responsive Design'],
      active: false
    }
  ];

  return (
    <section id="experience" className="relative w-full min-h-screen bg-[#050505] flex flex-col justify-center px-4 md:px-12 lg:px-20 py-24 overflow-hidden border-t border-neutral-900">
      <div className="max-w-300 mx-auto w-full relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <Code2 className="w-4 h-4 text-[#6366F1]" />
          <span className="font-mono text-[#6366F1] text-xs tracking-[0.2em] uppercase">
            02 // Signal Routing (Log)
          </span>
          <div className="w-12 h-px bg-linear-to-r from-[#6366F1] to-transparent"></div>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold mb-16 tracking-tighter">
          Career <span className="text-neutral-500">Timeline.</span>
        </h3>

        <div className="relative">
          {/* Main Signal Cable */}
          <div className="absolute left-3.75 md:left-9.75 top-4 bottom-0 w-0.5 bg-linear-to-b from-[#6366F1] via-neutral-800 to-transparent"></div>

          <div className="flex flex-col gap-12">
            {experiences.map((item, idx) => {
              return (
                <ExperienceCard
                  key={idx}
                  year={item.year}
                  role={item.role}
                  company={item.company}
                  desc={item.desc}
                  tech={item.tech}
                  active={item.active}
                />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
