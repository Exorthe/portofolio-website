import Sidebar from './components/Sidebar';
import Contact from './section/Contact';
import Experiences from './section/Experiences';
import Hero from './section/Hero';
import SkillSets from './section/SkillSets';
import Tracks from './section/Tracks';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-[#6366F1] selection:text-white flex overflow-hidden">
      
      {/* Left Sidebar Layout */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-20 md:ml-28 relative h-screen overflow-y-auto scroll-smooth overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-950 [&::-webkit-scrollbar-thumb]:bg-neutral-800 hover:[&::-webkit-scrollbar-thumb]:bg-neutral-700">
        
        <Hero />

        <Experiences />

        <SkillSets />

        <Tracks />

        <Contact />
      </main>
    </div>
  );
}